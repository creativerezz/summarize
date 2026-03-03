# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Browser extension for Chrome (Side Panel) and Firefox 131+ (Sidebar) that streams AI summaries from a local daemon. Built with **WXT** (WebExtension framework) + **Preact** (aliased as React). TypeScript throughout, Manifest V3.

The extension is one app in the `summarize` monorepo. Run commands from this directory (`apps/chrome-extension`) or prefix with `-C apps/chrome-extension` from the repo root.

## Commands

```bash
# Development (watch mode)
pnpm dev                     # Chrome
pnpm dev:firefox             # Firefox

# Production builds
pnpm build                   # Chrome → .output/chrome-mv3/
pnpm build:firefox           # Firefox → .output/firefox-mv3/
pnpm build:all               # Both

# Tests (Playwright e2e — builds first, then runs)
pnpm test:chrome             # Chrome tests
pnpm test:firefox            # Firefox tests (most tests skipped by default)
ALLOW_FIREFOX_EXTENSION_TESTS=1 pnpm test:firefox   # Force Firefox tests

# Lint
pnpm lint                    # wxt lint

# Headed browser (for debugging tests)
HEADLESS=0 pnpm test:chrome
```

After extension changes, always rebuild + restart daemon (from repo root):

```bash
pnpm -C apps/chrome-extension build
pnpm summarize daemon restart
```

## Architecture

### Entry points (`src/entrypoints/`)

| File / Folder           | Purpose                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `background.ts`         | Service worker — central message hub, daemon HTTP calls, SSE streaming, tab tracking |
| `sidepanel/`            | Main UI (Side Panel on Chrome, Sidebar on Firefox) — summary display, chat, slides   |
| `options/`              | Settings page (`open_in_tab: true`)                                                  |
| `extract.content.ts`    | Injected into pages to extract readable text via `@mozilla/readability`              |
| `hover.content.ts`      | Hover-to-summarize feature content script                                            |
| `automation.content.ts` | DOM automation / agent content script                                                |

### Messaging protocol (`background.ts`)

The background service worker is the single point of contact with the daemon. All communication flows through `chrome.runtime` messages:

- **Panel → Background**: `panel:summarize`, `panel:agent`, `panel:chat-history`, `panel:seek`, `panel:ping`, etc.
- **Background → Panel**: `bg:stream-*`, `bg:done`, `bg:error`, `bg:status`, `bg:slides-*`, etc.
- **Background → Content**: `bg:extractPage`, `bg:hoverSummarize`, `bg:automation-*`

### Daemon communication

The extension connects to the local daemon at `http://127.0.0.1:8787` using a shared token stored in `chrome.storage.local`. The background script makes HTTP requests, parses SSE streams (`src/lib/sse.ts`), and forwards events to the sidepanel via `chrome.runtime.sendMessage`.

Request bodies are built in `src/lib/daemon-payload.ts` from settings + extracted page content.

### Library (`src/lib/`)

- `settings.ts` — `loadSettings()` / `saveSettings()` / `patchSettings()` over `chrome.storage.local`; `defaultSettings` is the source of truth for all setting keys and defaults
- `sse.ts` — async generator that parses SSE streams from `ReadableStream<Uint8Array>`
- `daemon-payload.ts` — builds the JSON body for daemon summarize/agent requests
- `agent-response.ts` — parses agent tool-call / assistant message responses
- `chat-context.ts` — assembles page content context for chat requests
- `token.ts` — token generation and validation
- `theme.ts` — color scheme / mode normalization

### UI (`src/ui/`)

Preact components. React is aliased to Preact in `wxt.config.ts` via Vite resolve aliases — import as `preact` directly or use `react`-style imports interchangeably.

Zag.js (`@zag-js/*`) is used for accessible headless UI primitives (checkbox, select).

### Automation (`src/automation/`)

Agent tool execution layer:

- `tools.ts` — dispatches tool calls: `navigate`, `repl`, `ask_user_which_element`, `skill`, `artifacts`, `summarize`, `debugger`
- `repl.ts` — JavaScript REPL in page context via `userScripts` API (optional permission)
- `skills.ts` / `skills-store.ts` — user-defined skills stored in `chrome.storage.local`
- `artifacts-store.ts` — stores agent-produced artifacts (canvas renders, generated files)

### Browser differences

The codebase uses `import.meta.env.BROWSER` (set by WXT) to branch Chrome vs Firefox:

- **Chrome**: `chrome.sidePanel` API, `sidePanel` permission, `debugger` permission
- **Firefox**: `browser.sidebarAction` API, keyboard shortcut `Ctrl+Shift+U`; no `sidePanel`/`debugger` permissions in manifest

WXT automatically polyfills `chrome.*` → `browser.*` for Firefox.

### Build-time constants (`wxt.config.ts`)

| Constant                  | Source                        |
| ------------------------- | ----------------------------- |
| `__SUMMARIZE_VERSION__`   | Root `package.json` version   |
| `__SUMMARIZE_GIT_HASH__`  | `git rev-parse --short HEAD`  |
| `__SUMMARIZE_DEV_TOKEN__` | `SUMMARIZE_DEV_TOKEN` env var |

## Testing

Tests live in `tests/extension.spec.ts`. They use Playwright with a real browser + unpacked extension loaded from `.output/chrome-mv3/` (or `firefox-mv3/`). The test suite spins up an in-process daemon mock server.

Firefox extension tests are gated by `ALLOW_FIREFOX_EXTENSION_TESTS=1` due to Playwright limitations with Firefox extensions.

YouTube e2e tests are gated by `ALLOW_YOUTUBE_E2E=1`; URLs can be overridden via `SUMMARIZE_YOUTUBE_URLS`.

## Key conventions

- Settings are normalized on both read and write (see normalize\* functions in `settings.ts`); never store raw user input directly.
- The daemon token is stored in `chrome.storage.local` under the key `"settings"` as `token`. A build-time dev token (`__SUMMARIZE_DEV_TOKEN__`) overrides an empty stored token.
- All SSE event types are shared with the monorepo via `src/shared/sse-events.ts` (in the repo root `src/` — imported with an absolute path alias).
- Content scripts use `chrome.scripting.executeScript` for dynamic injection; `extract.content.ts` and `hover.content.ts` are also declared as static entry points so WXT registers them.
