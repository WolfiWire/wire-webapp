# Design System: Wire Desktop & Web App

> **Sources:**
> - UI Component Library: https://www.figma.com/design/9EiP6pojw8ZoCOwFDX0YpG/Desktop-UI
> - User Flows & Screens: https://www.figma.com/design/jnygr7PEOk1yHgjBF18udc/Desktop
>
> **Spec version:** V1.0 · **Owner:** Wolfgang
> **Platforms:** Web (Electron desktop wrapper + web browser)
>
> **How to use this file:** Load as context at the start of any implementation or documentation task.
> Treat all token names, component names, and rules here as authoritative.
> If Figma and this file conflict, update this file first, then proceed.
> For component-level specs, see [`docs/design-components.md`](docs/design-components.md).

---

## 1. Visual Theme & Atmosphere

Wire Desktop is a **secure communications and collaboration platform** for enterprise and government users, designed to feel friendly, approachable, and easy to use — without sacrificing the highest level of security available. The aesthetic is clean, modern, and uncluttered: surfaces use a cool light-gray palette (sidebar slightly darker than the content area, separated by a subtle divider), giving the UI a calm, professional feel without being cold or technical. The interface is **moderately dense** — 32px navigation items, 56px conversation list rows — supporting extended work sessions without visual fatigue. The user's chosen **accent color** is used sparingly — only for interactive elements, focus states, and identity indicators — keeping the visual hierarchy clear and reducing distraction. The Dark UI variant uses near-black surfaces with a lighter accent variant to maintain contrast. Corner radii are consistently generous: 8px for list items and nav rows, 12px for buttons and cards, 16px for large primary buttons. **Accessibility target: WCAG 2.1 AA** across all components, color pairings, and interactive states.

---

## 2. Color System

> **Token-first rule:** This section uses token names only — no hex values. Resolved hex values vary by the user's chosen accent color and by light/dark mode, so a single hex value is never authoritative. To look up a current resolved value: check `wire-ds-tokens.less` in the codebase, or inspect the variable in Figma with the correct mode selected.

> **Token migration status:** The codebase contains BOTH new Wire DS token names (`--background/base/primary`) and legacy names (`--backgrounds/surface`, `--base/primary`). New names are authoritative. Replace legacy names on touch.

### 2a. Accent Color System

Wire supports **6 user-selectable accent colors**. The user's chosen accent flows through all `--background/accent-color/*`, `--content/accent-color/*`, and `--border/accent-color/*` tokens. Default accent is **Blue**.

| Accent | Key |
|---|---|
| Blue (default) | `blue` |
| Green | `green` |
| Red | `red` |
| Amber | `amber` |
| Petrol | `petrol` |
| Purple | `purple` |

- Never hardcode a specific accent hex. Always use the semantic accent token.
- An accent change must only require updating the token's resolved value — not touching component code.
- Focus ring color (`--border/base/:focus`) is accent-derived. Do not hardcode it.

### 2b. Light & Dark Mode

Wire uses **distinct color palettes** per mode. Dark mode is applied via `body.theme-dark`. The Dark UI prop on individual components (calling buttons, sidebar, message input) is a design concept — in code, dark theming is the body class. Always verify a color works in both modes.

### 2c. Semantic Tokens — Background

| Token | Role |
|---|---|
| `--background/base/primary` | Default content surface (conversation area, modals, hover/active element background) |
| `--background/base/secondary` | Slightly recessed surface (message row default background) |
| `--background/base/secondary-focus` | Hover/focus state on secondary surfaces; button hover background |
| `--background/base/tertiary` | Navigation sidebar background |
| `--background/base/tertiary-focus` | Sidebar dividers, collapsed sidebar border, section separators |
| `--background/inverted/secondary` | Dark UI sidebar background (near-black) |
| `--background/accent-color/primary` | Primary CTA background (filled button, unread badge, active selection) — **accent-dependent** |
| `--background/accent-color/primary-focus` | Hover/focus on filled accent button — **accent-dependent** |
| `--background/accent-color/secondary` | Light accent tint (active icon button, membership qualifier badge) — **accent-dependent** |
| `--background/disabled/primary` | Disabled filled button background |
| `--background/disabled/secondary` | Disabled outlined/ghost button background |

Legacy: `--backgrounds/surface` → `--background/base/primary` · `--backgrounds/background-variant` → `--background/base/secondary`

### 2d. Semantic Tokens — Content

| Token | Role |
|---|---|
| `--content/base/primary` | Default text and icons |
| `--content/base/secondary` | Secondary text (timestamps, @username handle, nav section headings) |
| `--content/accent-color/primary` | Links, mentions, active user name — **accent-dependent** |
| `--content/accent-color/on-primary` | Text/icons on filled accent backgrounds (primary button label) |
| `--content/inverted/on-secondary` | Text/icons on dark inverted surfaces |
| `--content/disabled/on-primary` | Text on disabled filled button |
| `--content/disabled/on-secondary` | Text on disabled outlined button |

Legacy: `--backgrounds/on-surface` → `--content/base/primary`

### 2e. Semantic Tokens — Border

| Token | Role |
|---|---|
| `--border/base/primary` | Default border (inputs, cards, avatar rings, dividers) |
| `--border/base/:focus` | Focus ring (box-shadow spread: 2px) — accent-derived tint |
| `--border/accent-color/primary` | Accent border (hover on outlined button, active/focused input) — **accent-dependent** |
| `--border/accent-color/:focus` | Accent focus ring variant — **accent-dependent** |
| `--border/disabled/primary` | Border on disabled elements |
| `--border/inverted/primary` | Border on dark/inverted surfaces |

Legacy: `--base/focus` → `--border/base/:focus` · `--base/primary` → `--background/accent-color/primary` or `--border/accent-color/primary` depending on context

### 2f. Semantic Tokens — Status / Feedback

| Token | Role |
|---|---|
| `--base/positive` | Success state border/icon |
| `--base/warning` | Warning state border/icon |
| `--base/error` | Error state border/icon |

Fixed colors — not accent-dependent.

### 2g. Primitive Palette

Primitives are the raw color scale semantic tokens reference. Hex values belong here and only here.

> Primitive scale not fully accessible via current API token scope (`file_variables:read` missing). Extend this section as values are verified from `wire-ds-tokens.less` or Figma variable definitions.

---

## 3. Typography

> **Font family:** SF Pro Text (macOS system font). Weights: Regular (400), Medium (500), Semibold (600), Bold (700). Web fallback: `system-ui, -apple-system, sans-serif`.

| Style Name | Weight | Size | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `Headlines/H3` | Semibold | 14px | 20px | 0 | Section nav labels, modal sub-headers |
| `Paragraph/Body 01` | Regular | 16px | 24px | 0.05px | Default message body text |
| `Paragraph/Body 02` | Medium | 14px | 20px | 0.05px | Conversation list titles |
| `Paragraph/Body 04` | Bold | 12px | 24px | 0.35px | User names in chat (message header) |
| `Paragraph/Subline 01` | Regular | 12px | 14px | 0 | Meta text (@username handle, secondary info) |
| `Button/Button big` | Semibold | 16px | 24px | 0.05px | Large button label |
| `Button/Button small` | Bold | 14px | 24px | 0.35px | Small button label |
| Nav section heading | Bold | 10px | — | 0 | "CONVERSATIONS" etc., uppercase |
| Membership qualifier | Medium | 11px | — | — | "Guest" badge |

> H1, H2, H4, Body 03, Label 01–05, Link, Emoji styles not yet retrieved. Call `mcp__figma__get_design_context` on style nodes in the Figma file to complete.

---

## 4. Spacing & Layout

**Base unit:** 8px. Tight spacing uses multiples of 4px.

| Description | Value |
|---|---|
| Nav item padding (expanded) | `pl-12px pr-8px py-6px` |
| Nav item gap (icon → label) | `12px` |
| Nav section gap | `8px` items · `32px` between sections |
| Message leading padding | `pl-24px py-8px pr-40px` |
| Message following padding | `pl-64px py-4px pr-40px` |
| Button large padding | `px-16px py-12px` |
| Button small padding | `px-12px py-4px` |
| Icon button size | `32×40px` (h×w), `px-12px py-8px` |

**3-panel layout:**

```
┌──────────┬──────────────────┬──────────────────────────┐
│ Account  │ Navigation       │ Content area             │
│ sidebar  │ sidebar          │                          │
│ 80px     │ 232px (expanded) │ flex-1                   │
│          │ 64px (collapsed) │                          │
└──────────┴──────────────────┴──────────────────────────┘
```

- Account sidebar: `--background/base/tertiary-focus` (Light) / `--background/inverted/secondary` (Dark)
- Navigation sidebar: `--background/base/tertiary` (Light), right border `1px solid --border/base/primary`
- macOS traffic lights: 16px strip above the sidebar columns

---

## 5. Elevation & Effects

| Effect | Type | Values | Usage |
|---|---|---|---|
| Snackbar / popup | DROP_SHADOW | offset 0,0 · radius 12px · spread 0 · `rgba(0,0,0,0.25)` | Floating menus, snackbar |
| Focus ring | DROP_SHADOW | offset 0,0 · radius 0 · spread 2px · `--border/base/:focus` | All focusable elements |

**Depth hierarchy (Light UI):**
1. `--background/base/tertiary` — Navigation sidebar (lowest)
2. `--background/base/secondary` — Default message background
3. `--background/base/primary` — Hover/active surface, modals, cards
4. Floating (dropdowns, snackbars): `--background/base/primary` + drop shadow

---

## 6. Design Patterns & Rules

### Theming
- Light UI is the default. Dark UI is an explicit prop on specific components (calling, sidebar, message input) — not a full-app dark mode.
- Full-app dark mode uses `body.theme-dark` and `--background/inverted/secondary` with dark-variant accent tokens.

### Focus States
- All interactive elements: `box-shadow: 0 0 0 2px var(--border/base/:focus)` + `border: 1px solid var(--border/accent-color/primary)`.
- Focus ring is accent-derived — never hardcode the hex value.

### Hover States
- Buttons: bg → `--background/base/secondary-focus` + accent border.
- Nav items: background tint per component spec.
- Message row: bg → `--background/base/primary`, revealing context menu.

### Border Radius Scale
| Value | Used for |
|---|---|
| `4px` | Tags, badge containers, small labels |
| `6px` | Reaction pills, small cards |
| `8px` | Nav items, folder rows, list item cells |
| `12px` | Icon buttons, small buttons, message context menu, Snackbar |
| `16px` | Large buttons |
| `100px` | Avatar circles, status dots, expand/collapse button |

### Typography Conventions
- Navigation section headings: `text-transform: uppercase`, 10px Bold, `--content/base/secondary`.
- Nav item labels: `font-feature-settings: "'cpsp' 1"` (SF Pro Text Semibold 14px).
- Message body: `letter-spacing: 0.05px` — do not override.

### Accessibility
- **Target: WCAG 2.1 AA** for all color pairings and interactive states.
- Focus ring: spread 2px, `--border/base/:focus` — do not use outline-based focus rings; do not hardcode the hex value.
- Disabled states: use dedicated token pairs (`disabled/primary` for filled, `disabled/secondary` for outlined) — do not simulate with opacity alone.
- Avatar alt text: `alt=""` for decorative avatars; descriptive text for identity-conveying avatars.

---

## 7. User Flows Reference

> **Source:** https://www.figma.com/design/jnygr7PEOk1yHgjBF18udc/Desktop
> **Access status:** Desktop Bridge plugin was not connected during initial generation. Full flow screens require opening this file in Figma with the Desktop Bridge plugin active.

Covers: conversation flows, calling flows, meeting flows, settings, onboarding/auth. To access specific screens: activate Desktop Bridge plugin in the Desktop Figma file, then use `mcp__figma-console__figma_navigate` + `mcp__figma__get_design_context` with the relevant frame node IDs.

---

## 8. Open Questions & Gaps

| Gap | Impact | Resolution |
|---|---|---|
| H1, H2, H4, Label 01–05 values not retrieved | Typography section incomplete | `get_design_context` on style nodes in Figma |
| Full dark mode token mapping not documented | Cannot implement full dark theme | Inspect Dark UI variants of each component in Figma |
| Primitive color scale not fully exposed | Cannot document alias resolution chain | Requires `file_variables:read` API scope |
| Desktop flows screens not accessible | Cannot document screen-level specs | Open Desktop file with Desktop Bridge plugin |
| Code Connect not available | No verified component import paths | Requires Figma Developer seat; map manually |
| Legacy token names still in codebase | Migration debt | Replace on touch per mapping tables in Section 2 |
