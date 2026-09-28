---
version: alpha
name: Bergstrom-design-analysis
description: Bergstrom's corporate identity is an industrial climate-control system built around a red-and-blue thermal symbol, the Europa CG Bold wordmark, and a disciplined white technical canvas. Company Red and Company Blue carry the brand; cool grays organize specifications and secondary information. Layouts are square, direct, and engineering-led, with strong horizontal bands, large white fields, compact Arial copy, and no decorative gradients or soft visual effects. The official logo lockup must always be used as supplied, scaled proportionally, and protected by its prescribed clear space.

colors:
  primary-red: "#db2f36"
  primary-blue: "#0072ba"
  cool-gray-7: "#b7b9ba"
  cool-gray-11: "#747476"
  ink: "#000000"
  canvas: "#ffffff"
  surface-soft: "#f2f3f3"
  surface-technical: "#e6e7e8"
  border: "#b7b9ba"
  on-red: "#ffffff"
  on-blue: "#ffffff"
  on-dark: "#ffffff"

typography:
  wordmark:
    fontFamily: "'Europa CG Bold', 'Arial Black', Arial, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0
  display-xl:
    fontFamily: "'Arial Bold', Arial, 'Microsoft YaHei', sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -1px
  heading-xl:
    fontFamily: "'Arial Bold', Arial, 'Microsoft YaHei', sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  heading-lg:
    fontFamily: "'Arial Bold', Arial, 'Microsoft YaHei', sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-md:
    fontFamily: "Arial, 'Microsoft YaHei', sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: "Arial, 'Microsoft YaHei', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Arial, 'Microsoft YaHei', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'Arial Narrow', Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0.4px
  label:
    fontFamily: "'Arial Bold', Arial, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.8px
    textTransform: uppercase
  chinese-document:
    fontFamily: "SimSun, 'Songti SC', serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  masthead:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 72px
  brand-band:
    backgroundColor: "{colors.primary-red}"
    textColor: "{colors.on-red}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 48px
  technical-band:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.none}"
    padding: 32px
  button-primary:
    backgroundColor: "{colors.primary-red}"
    textColor: "{colors.on-red}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 13px 24px
    height: 44px
  button-secondary:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: 13px 24px
    height: 44px
  specification-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 24px
  data-strip:
    backgroundColor: "{colors.surface-technical}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 12px 16px
  divider:
    backgroundColor: "{colors.cool-gray-7}"
    rounded: "{rounded.none}"
---

# Bergstrom Design System

## Brand Character

Bergstrom communicates engineered reliability through a highly controlled industrial identity. The visual system balances a hot red and cold blue symbol, reflecting the company's thermal-management focus, with a heavy black wordmark and generous white space. Pages should feel technical, global, and dependable rather than decorative.

**Key Characteristics:**

- **Official thermal lockup:** Use the supplied red-and-blue sphere with the official Europa CG Bold wordmark. Never recreate the lockup from typed text, redraw the symbol, or alter its internal construction.
- **Two-color brand signal:** Company Red (`#db2f36`, PMS 186) and Company Blue (`#0072ba`, PMS 300) are the primary identifiers. They may appear as separate bands or paired thermal accents.
- **Square engineering geometry:** Use straight rules, rectangular fields, aligned technical columns, and near-zero corner radii. Avoid soft cards, ornamental gradients, glass effects, and playful organic shapes.
- **White technical canvas:** Keep most content on white with black type. Use cool grays to separate specifications and blue for headings, annotations, and structural emphasis.

## Logo Rules

### Approved Lockups

- Use the full horizontal logo on white or other light backgrounds with the black Europa CG Bold wordmark.
- Use the approved reversed lockup on black or dark backgrounds with the white wordmark.
- A dedicated vertical lockup exists for business cards. Use that supplied artwork only; never rotate or rebuild the horizontal lockup to imitate it.
- The circular thermal symbol may be used only when the application specifically calls for the standalone mark.
- Keep the symbol and wordmark in their supplied relationship. Do not change proportions, spacing, shape, or structure.

### Clear Space

Maintain clear space around the entire lockup on all four sides. The guide defines `X` from the height between the circular mark's graphic and its outer border. No text, symbols, rules, or other graphic elements may enter this area.

### Minimum Size

The source guide marks a minimum printed or electronic logo height of 5 mm. Never reduce the logo until the wordmark or snowflake details become difficult to recognize. Always scale from a corner with locked proportions; never change width and height independently.

### Background Control

- Light background: use the standard red, blue, gray, and black lockup.
- Dark background: use the approved lockup with a white wordmark.
- Do not place the lockup over busy photography or low-contrast color fields.
- Do not recolor the logo outside the approved variants.

## Color System

### Primary Colors

- **Company Red / PMS 186:** `#db2f36` · RGB 219, 47, 54
- **Company Blue / PMS 300:** `#0072ba` · RGB 0, 114, 186

### Supporting Colors

- **PMS Cool Gray 7:** `#b7b9ba` · RGB 183, 185, 186
- **PMS Cool Gray 11:** `#747476` · RGB 116, 116, 118
- **Company Black:** `#000000`
- **Company White:** `#ffffff`

Company Red and Company Blue should lead. Cool grays support diagrams, rules, specifications, and secondary surfaces. White remains the dominant background.

## Typography

### Logo Typeface

`Europa CG Bold` is the confirmed wordmark typeface and is restricted to the official Logo. Do not use it for headings, body copy, buttons, labels, or other content. The official Logo artwork remains the source of truth and must not be reconstructed as ordinary text.

### Latin Typography

- Use Arial for normal body copy, labels, and interface text.
- Use Arial Bold for headings and strong technical labels.
- Use Arial Narrow for compact specifications where horizontal space is limited.
- Keep tracking neutral and hierarchy direct.

### Chinese Typography

- Use Microsoft YaHei for brand-facing Chinese headings and supporting display text.
- Use SimSun / Songti for formal Chinese document titles and body copy where the document standard requires it.

## Layout and Composition

- Build on a white grid with large uninterrupted margins.
- Use strong horizontal color bands in the order red, cool gray, blue, and white when a branded header or footer is needed.
- Align specifications and captions to a clear column system.
- Separate dense technical content with 1 px cool-gray rules rather than shadows.
- Use blue for section headings and technical annotations; reserve red for brand emphasis and primary actions.
- Keep photography or product renders cleanly cropped and separated from copy. Avoid placing body text over images.

## Digital Application

- Navigation should be white with black text and an approved logo lockup.
- Primary actions use Company Red; secondary technical actions may use Company Blue.
- Cards and tables remain square, white, and ruled with cool gray.
- Data visualizations use Company Blue as the default series and Company Red only for alerts, heat, or critical emphasis.
- Motion should be functional and restrained, using short fades or direct positional transitions.

## Avoid

- Do not stretch, compress, rotate, crop, or redraw the logo.
- Do not typeset a replacement wordmark, even when Europa CG Bold is available.
- Do not alter the approved red, blue, gray, black, or white logo colors.
- Do not place other elements inside the clear-space boundary.
- Do not use rounded consumer-app cards, soft shadows, neon gradients, or decorative textures.
- Do not use Company Red and Company Blue as competing full-page backgrounds; one should lead while the other acts as a controlled secondary accent.

## Source Basis

This system was transcribed from the supplied ten-slide `Bergstrom logo .pptx` brand guide. The `Europa CG Bold` typeface was confirmed from the separately supplied OpenType attachment.
