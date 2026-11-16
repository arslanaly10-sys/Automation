---
name: phosphor-icons
description: How to use Phosphor icons in this project. Use whenever adding or changing an icon.
---

# Phosphor icons

The site uses `@phosphor-icons/react` (MIT, https://phosphoricons.com, source https://github.com/phosphor-icons/homepage).

- Server components: `import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";`
- Client components: `import { PhoneIcon } from "@phosphor-icons/react";`
- Always use the `...Icon` suffixed names.
- Weights: `duotone` for service icons, `bold` for UI controls (menus, arrows), `fill` for status (done, incoming call), `regular` elsewhere.
- Sizes: 16–18 inside buttons, 20–22 in lists, 24 for section icons.
- Icons inherit `currentColor`, so colour them with text utilities (`text-crimson`, `text-crimson-ink`).
- Icon-only buttons need an `aria-label`. Decorative icons next to text need nothing extra.
- Browse names at https://phosphoricons.com before inventing a custom SVG.
