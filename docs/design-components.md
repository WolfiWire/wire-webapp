# Design Components: Wire Desktop & Web App

> **Part of the Wire design documentation.** See [`DESIGN.md`](../DESIGN.md) for the full token system, typography, spacing, and design rules.
> **Figma source:** https://www.figma.com/design/9EiP6pojw8ZoCOwFDX0YpG/Desktop-UI
>
> These are **Figma design components** — not code components. Node IDs reference the Desktop-UI Figma file (`fileKey=9EiP6pojw8ZoCOwFDX0YpG`). Code Connect mappings are not available (requires Figma Developer seat); all import paths must be maintained manually.

---

## Buttons

#### `Button / Button` (node `53:967`)
- **Variants:** `Size=Large|Small`, `Type=Primary|Secondary|Tertiary`, `State=Enabled|Hover|Focus|Disabled`
- **Props:** `showIcon` (boolean), `icon` (slot)
- **Large Primary:** min-width 128px, `px-16px py-12px`, `border-radius: 16px`, bg `--background/accent-color/primary`, text `--content/accent-color/on-primary`, font Button/Button big
- **Large Secondary:** border `--border/base/primary`, bg `--background/base/primary`, text `--content/base/primary`
- **Small Primary:** `px-12px py-4px`, `border-radius: 12px`, font Button/Button small
- **Small Tertiary:** No background, no border (default), hover adds `--border/accent-color/primary`
- **Disabled primary:** bg `--background/disabled/primary`, text `--content/disabled/on-primary`
- **Focus:** adds `box-shadow: 0 0 0 2px --border/base/:focus` + accent border
- **Hover on primary:** bg shifts to `--background/accent-color/primary-focus`
- **Code:** not mapped

#### `Button / Icon Button` (node `2:284`)
- **Variants:** `Type=Primary|Secondary`, `State=Enabled|Hover|Focus|Active|Disabled`
- **Size:** `32×40px` (height×width), `px-12px py-8px`, `border-radius: 12px`
- **Primary enabled:** bg `--background/base/primary`, border `--border/base/primary`
- **Hover/Focus:** bg `--background/base/secondary-focus`, border `--border/accent-color/primary`
- **Active:** bg `--background/accent-color/secondary`, border `--border/accent-color/:focus`
- **Disabled:** bg `--background/disabled/secondary`, border `--border/disabled/primary`
- **Code:** not mapped

#### `Button / Button Group / Icon Button` (node `2:223`)
- Groups multiple icon buttons in a horizontal row with `margin-right: -1px` (overlapping borders)
- First button: `border-radius-left: 12px`, last button: `border-radius-right: 12px`, middle: square
- Used in message context menu (hover toolbar)

#### `Button / Send Button` (node `161:2328`)
- Themed: Light UI / Dark UI
- State: Enabled

#### `Button / Calling` (node `74:1086`)
- **type:** `pick up | hang up | Join`
- **size:** `small (40×24px) | medium (68×24px) | fullscreen (64×64px)`
- Themed: Light UI / Dark UI — uses calling-specific tokens (not documented here, requires separate audit)

#### `Button / Calling Toggles` (node `93:1726`)
- **Type:** `Video | Microphone | Screenshare | Conversation | Settings`
- **ON/OFF** toggle property
- **Size:** Small | Big — Big includes icon + label below
- Themed: Light UI / Dark UI

---

## Navigation

#### `Navigation Sidebar (WIP)` (node `3139:23155`) — **Canonical; use this, not deprecated variant**
- **State:** `Expanded (232px) | Collapsed (64px)`
- **Props:** `files`, `meetings` (boolean toggles for sections)
- Background: `--background/base/tertiary` (Light)
- Right border: `1px solid --border/disabled/primary`
- Profile switcher: 32px avatar + name/handle stack, gap 8px
- Section headings: 10px Bold uppercase, `--content/base/secondary`, `text-transform: uppercase`
- Nav item height: 32px, `border-radius: 8px`, gap 12px (icon + label)
- Icon size: 14×14px
- Label: 14px Semibold (`cpsp` feature enabled), `--content/base/primary`
- Section groups: Conversations, Contacts, [Files], [Meetings], Settings/Support (bottom)
- Conversations items: All, Favorites, Channels, Groups, 1:1 Conversations, Folders, Archive
- Expand/Collapse button: white circle, `border-radius: 100px`, `border: 2px solid --border/disabled/primary`, positioned `right: -13px`

#### `Desktop Sidebar / Sidebar` (node `3882:8714`) — Multi-workspace account bar
- Width: 80px (Light) / 79px (Dark)
- Background: `--background/base/tertiary-focus` (Light) / `--background/inverted/secondary` (Dark)
- Traffic lights at very top (system macOS chrome)
- Team icon: 28×28px, `border-radius: 6px`
- Selected team: `border: 2px solid --border/accent-color/primary` (Light) / `--dark/accent-color/500` (Dark), wrapping 36×36px ring
- Add workspace button: circle `+` icon

#### `Navigation Item` (node `2004:2797`)
- Boolean slots: `Prompt`, `Activity`, `Secondary icon`
- State: Enabled, `Collapsed=Yes|No`

---

## Conversation List

#### `List item / Conversation List` (node `2:1262`)
- **list item types:** `default | with profile status | group | channel`
- **Event Badge:** YES | NO (unread indicator)
- **States:** Default, Hover, Focus 1, Focus 2, Selected, Selected Hover, Selected Focus 1, Selected Focus 2
- Height: 56px, padded container 300px wide
- Avatar: 24×24px circle, `border: 1px solid --border/base/primary`, positioned `left-16px top-16px`
- Title: 14px Medium, `left-64px`, `--content/base/primary`, truncated with ellipsis
- Bottom divider: 1px line `left-64px`
- Selected state background: not explicitly retrieved — check Figma for selected BG token

#### `Folder` / `Folders` (node `1131:3469` / `2004:3095`)
- Collapsible folder group in the conversation list
- Activity badge: 8px dot (`--background/accent-color/primary`), `border: 2px solid --border/inverted/primary`

---

## Messaging

#### `Message Container` (node `2017:4913`)
- **Type:** `Leading` (shows avatar + name) | `Following` (no header, indented)
- **Hover:** shows message context menu
- Width: 780px, `pr-40px`
- Leading: `pl-24px py-8px`; Following: `pl-64px py-4px|8px`
- Default BG: `--background/base/secondary` (legacy: `--backgrounds/background-variant` — replace on touch)
- Hover BG: `--background/base/primary`

#### `Message Body`
- Font: Paragraph/Body 01 — 16px Regular, `--content/base/primary`, `line-height: 24px`, `letter-spacing: 0.05px`
- Width: fills container (min 1px)

#### `Message Context Menu` (hover toolbar)
- Appears above the message on hover: `position: absolute; top: -24px; right: 16px`
- Uses `Button / Button Group / Icon Button` (icon buttons at 40×32px)
- Emoji reactions (👍 ❤️ 😂 …) + reply + thread + more
- `border-radius: 12px` on first/last buttons of the group

#### `Reaction Pill` (node `1408:3714`)
- `border: 1px solid --border/base/primary`, `border-radius: 6px`, `px-6px py-5px`
- Emoji: 16px (SF Pro Display Medium, transparent color — let OS render emoji)
- Count: 12px Regular, `--content/base/primary`
- BG: `--background/base/primary`

#### `Input icons` / Message header
- Sender name: 12px Bold (`--content/accent-color/primary`), `letter-spacing: 0.35px`
- Timestamp: 12px Regular, `--content/base/secondary`
- Membership Qualifier: bg `--background/accent-color/secondary`, border `--border/accent-color/primary`, text `--content/accent-color/primary`, `border-radius: 4px`, `px-4px py-2px`

---

## Input / Forms

#### `Inputfield / Default` (node `2:381`)
- Props: `State=No Input|...`, `Floating label`, `Mandatory`, `Icon`, `Description`

#### `Inputfield / Password` (node `2982:2622`)
- Props: `Floating label`, `Description`, `Mandatory`, `PW visible=Yes|No`

#### `Inputfield / Search` (node `3880:1421`)
- `Size=Tall`

#### `New Inputfield / Message Input / Web` (node `2631:6342`) — **Canonical**
- Theme: Light UI | Dark UI
- State: Default | ...
- Markdown: Active | Inactive
- Placement: Main message | Reply | ...
- Note: `DEPRECATED Inputfield / Message input / Web` (node `2:305`) is superseded by this

#### `Text input` (node `2631:6914`)
- State: default

#### `Inputfield / Code` (node `131:1489`)
- State: Default | Hover | Focus/Active | Filled | Filled Correct | Filled Error
- Size: 48×56px per digit

---

## Feedback & Status

#### `Snackbar` (node `3198:315`)
- Width: 520px, `border-radius: 12px`, `padding: 8px`
- `box-shadow: 0 0 12px rgba(0,0,0,0.25)`
- **State / border color:**
  - Info: `--border/accent-color/primary` (legacy: `--base/primary`)
  - Error: `--base/error`
  - Success: `--base/positive`
  - Warning: `--base/warning`
  - Progress: `--border/accent-color/primary` + animated progress bar at bottom
- BG: `--background/base/primary` (legacy: `--backgrounds/surface`)
- Title: 14px Semibold (`Headlines/H3`); Subtitle: 14px Medium (`Paragraph/Body 02`)
- Actions: up to 2 small buttons + close icon button

#### `Toast` (node `2113:331`)
- Lightweight, no action buttons

#### `Banner` (node `2206:3742`)
- Type: `In nav banner`

#### `No internet connection` (node `3451:16549`)
- State: No Internet

---

## Avatars & Identity

#### `User Avatar` (node `1601:3662`)
- Size: 24×24px (list), 32×32px (profile/nav), 28×28px (account sidebar)
- `border-radius: 100px` (full circle)
- `border: 1px solid --border/base/primary`
- Availability dot: 8×8px, `bottom: 0; right: 0`, inset `-25%` for the glow ring

#### `Availability` (node `2005:4313`)
- Status: Available (green dot)
- Size: 8×8px

#### `Group avatar` (node `2864:98`)
- Color variation: 1–N

#### `Channel avatar (Icon)` (node `2655:7134`)
- Props: `Closed` (boolean), `Color=Blue|...`

#### `User` (node `3003:4587`)
- Avatar + display name, used in message headers

#### `Profile switcher` (node `2040:1204`)
- Props: `Legal hold`, `Verification status`

---

## Calling

#### `Calling Controls` (node `3073:2166`)
- **Control:** Microphone | Video | Screenshare
- **Size:** Large | Small
- **Active:** Yes | No
- **Status:** Enabled | Disabled

#### `Participant tile (fullscreen)` (node `3126:15875`)
- Props: `E2EI` (boolean), `Name`, `Speaking`, `Muted`, `Camera On`

#### `Participant tile (minimized)` (node `3126:20667`)
- Same props, smaller tile

#### `Meeting fullscreen controls` (node `3161:15187`)
- Full calling control bar

#### `Minimized meeting` (node `3134:22059`)
- Picture-in-picture mode

#### `Secondary controls` (node `3190:2539`)
- Boolean slots: Chat, Raise hand, View mode, Reactions, Participants list

#### `Join meeting modal / AV-check` (node `3073:2159`)

#### `Meeting fullscreen header` (node `3482:2584`)
- Props: `Dropdown`, `Menu open`, `Initiator status=Paying user|...`

---

## Meetings List

#### `Meeting list item` (node `3073:2379`)
- Props: `Recurring meeting` (boolean), `Options menu open` (boolean), `Meeting status=Past|Upcoming|...`

#### `Meeting list item / Background` (node `3138:22123`)
- `Position=First|...`, `Emphasized=Yes|No`

#### `Meeting Button` (node `3073:2038`)
- `Call status`, `Button status`, `Has menu`, `Show Label`

#### `Calendar / Picker` (node `3330:2160`)

#### `Calendar / Day` (node `3330:2147`)
- `Selected`, `Time=Past|...`

---

## Tabs & Navigation Controls

#### `Tab` (node `2624:84`)
- State: Selected | ...

#### `Tab Navigation` (node `2624:98`)

#### `Tab (Pill)` (node `2625:9`)

#### `Tab Navigation (Pills)` (node `2625:53`)

#### `View toggle button` (node `510:3816`)
- State: Default | Hover 1 | Hover 2 | Focus 1 | Focus 2
- Theme: Light UI | Dark UI
- Width: 151px, height: 32px

---

## Dropdowns & Menus

#### `Dropdown / Dropdown` (node `3907:4426`)
- State: Default | ..., `Mandatory=YES|NO`

#### `Dropdown / Dropdown List` (node `3907:4525`)

#### `Dropdown / List item` (node `3907:4602`)
- Type: Text, State: Default | ..., Theme: Light UI | Dark UI

#### `Drop down menu items` (node `2457:825`)
- `Icon` (instance swap), `Status present`, `Icon present=Icon right|...`, State: Enabled | ...

#### `Popup menu` (node `1822:6002`)
- Property 1: Conversation | ...

#### `Message context menu` (node `1819:5062`)
- Status: None | ...

#### `Dropdown menu` (node `2521:1047`)

---

## List Items

#### `List item / General List item` (node `28:694`)
- `List item=Setting / Other|...`, `Action button=YES|NO`, `State=Default|...`, `Divider Line=YES|NO`

---

## Files & Uploads

#### `File group` (node `3378:17790`)
- `States=Upload error|...`, `Number of files=1|...`

#### `Individual file status` (node `3377:17500`)
- State: Uploading | ..., `Icon=YES|NO`, `Hover=YES|NO`

#### `Upload progress` (node `3382:182`)
- State: Generic | ..., View: Expanded | Collapsed

#### `Audio message player` (node `2646:13150`)
- State: Loading | Playing | ...

---

## Miscellaneous

#### `Badge` (node `2004:2809`)
- Type: Number
- 8px dot with `border: 2px solid --border/inverted/primary`, `border-radius: 100px`
- Fill: `--background/accent-color/primary`

#### `Selectors` (node `32:909`)
- Type: Toggle switch | Checkbox | Radio
- State: Enabled | ..., Selected: YES | NO

#### `Progress bar` (node `3378:17548`)
- Progress: 100% | 75% | ...

#### `Time divider` (node `2029:377`)
- Type: Unread | Date

#### `Group Events` (node `3705:3105`)
- Variant: Started conversation | ...
- `Time is shown` (boolean)

#### `Collapse message` (node `3363:3396`)
- Type: Expand | Collapse

#### `Key command hint` (node `2047:551`)

#### `Scroll to bottom` (node `2530:5534`)

#### `Thread Header` (node `2275:4385`)

#### `Thread panel` (node `2275:4399`)

#### `Read Receipt` (node `2014:4870`)

#### `In-call reaction` (node `2445:1284`)

#### `Non-team members banner` (node `3351:15767`)
- Type: Apps | ...

#### `Channels – more chat history (banner)` (node `2827:4034`)

#### `Channels - more chat history (modal)` (node `2827:3705`)

#### `Channels - upgrade to team (modal)` (node `2827:3940`)

#### `Promotion sidebar` (node `3008:3133`)
- Target audience: Login | ...

#### `Missed activity` (node `3880:5013`)
- Type: Unread | ...

#### `Status with text` (node `2455:3851`)
- Status: None | ...

#### `Snackbar - desktop / Light` (node `2152:1082`)
- Boolean: `Show Text`, `Show Icon Button`

#### `Membership Qualifier` (node `2014:4438`)
- Belonging: Guest | External | ...

#### `Legal Hold` (node `2014:4544`)
- State: Active | ...

#### `Timer` (node `3482:2669`)
- Status: Default | ...

#### `Mic status` (node `3477:2182`)

#### `Video status` (node `3477:2105` area)

#### `Participants list` (node `3478:2568`)

#### `Participants list / Item` (node `3477:2105`)

#### `Meeting invitation prompt` (node `3084:11072`)

#### `Meetings - Prolonged meeting time (modal)` (node `3516:16905`)

#### `PW Icon` (node `3882:1331`)
- State: Visible | Hidden
