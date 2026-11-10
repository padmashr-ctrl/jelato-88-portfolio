# Jelato 88 Brand Portfolio

A responsive course portfolio for ASU GIT 502, built with plain HTML, CSS and JavaScript. Headings use Boska (self-hosted in `assets/fonts/`, from the main portfolio), the hero and numerals use Bagel Fat One (Google Fonts), and body text uses General Sans (Fontshare). The layout is art-led: each case-study chapter is a full-width color spread showing pages from the submitted work.

## Content model

All case-study copy, page images, reflections and feedback live in `content.js`. Add or edit a project there and the chapters update automatically. In each project, `accent` sets the chapter color (`lemon`, `grape`, `pumpkin`, `ink`, `lilac` or `matcha`), `layout` sets the page arrangement (`portrait`, `photo`, `chart`, `wide` or `reel`), `showcase` lists which entries from `pages` to display, and `reel` holds an Instagram reel ID to embed. The transparent cut-outs used in the hero and closing poster are in `assets/stickers/`.

The interactive Flavor Passport in the Playful by Design section is built in `passport.js`. Its text comes from the A04 Canva design, and its stamps and flavor icons are in `assets/passport/`.

## Original PDF navigation

- Every project CTA opens the original submitted PDF
- `Start with A02` opens the full A02 brand audit
- The browser Back button returns to the portfolio
- PDF files remain bundled under `assets/files/`

## Local preview

Run a static server in this folder:

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Feedback status

The site includes Canvas instructor feedback for A02, A03 and A04. A05c and A06b were submitted but ungraded on November 9, 2026. No written classmate comments were attached to the Canvas submissions at that time.
