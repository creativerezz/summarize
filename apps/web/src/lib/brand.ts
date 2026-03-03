/**
 * Brand/config for your fork.
 * Override via env: VITE_GITHUB_URL, VITE_NPM_PACKAGE, VITE_CHROME_STORE_URL
 */
const env = import.meta.env;

export const BRAND = {
  githubUrl: env.VITE_GITHUB_URL ?? "https://github.com/creativerezz/summarize",
  npmPackage: env.VITE_NPM_PACKAGE ?? "@creativerezz/summarize",
  chromeStoreUrl:
    env.VITE_CHROME_STORE_URL ??
    "https://chromewebstore.google.com/detail/summarize/cejgnmmhbbpdmjnfppjdfkocebngehfg",
} as const;
