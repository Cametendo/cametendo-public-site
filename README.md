# Cametendo Public Site

Single-page, modular social media CV with:

- bilingual UI (`de` / `en`)
- theme switch (`dark` / `light`)
- section-based component rendering (no page reload)

## Structure

- `index.html`: app entry
- `main.js`: root module import
- `style.css`: root stylesheet import
- `src/main.js`: app bootstrap + rendering + event handling
- `src/components/layout/`: header, nav, footer
- `src/components/sections/`: one file per content section
- `src/content/`: section-specific content data
- `src/i18n/`: UI text and language defaults
- `src/lib/`: state and small helpers
- `src/styles/main.css`: full design system + responsive styles

## Local Use

Open `index.html` in a browser.
