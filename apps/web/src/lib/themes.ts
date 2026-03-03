/**
 * All built-in daisyUI themes (v5).
 * @see https://daisyui.com/docs/themes/
 */
export const DAISYUI_THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
] as const;

export type DaisyUITheme = (typeof DAISYUI_THEMES)[number];

/** Themes with dark backgrounds (for light/dark mode toggle) */
export const DARK_THEMES: readonly string[] = [
  "dark",
  "night",
  "dim",
  "nord",
  "abyss",
  "dracula",
  "sunset",
  "black",
  "cyberpunk",
  "synthwave",
  "forest",
  "business",
  "coffee",
];
