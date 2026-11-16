# Project skills

Installed for the INFOTECH website build. Each folder is a Claude Code skill.

| # | Requested | Installed as | Source |
|---|-----------|--------------|--------|
| 1–2 | awesome-design-md | `awesome-design-md/` (all `design-md/*` files) | github.com/VoltAgent/awesome-design-md |
| 3 | web-design-guidelines | `web-design-guidelines/` | github.com/vercel-labs/agent-skills |
| 4 | taste-skill | `design-taste-frontend/` | github.com/Leonxlnx/taste-skill |
| 5 | playwright-cli | `playwright-cli/` | github.com/microsoft/playwright-cli |
| 6 | 12-principles-of-animation | `rs-motion/`, plus every other skill in the collection with an `rs-` prefix | github.com/raphaelsalaja/skill |
| 7 | emilkowalski/skills | `emil-design-eng/`, `animate/`, `review-animations/` and the rest | github.com/emilkowalski/skills |
| 8 | Phosphor icons | `phosphor-icons/` (usage guide; icons come from `@phosphor-icons/react`) | github.com/phosphor-icons/homepage |
| 9 | /graphify | `graphify/` | Anthropic skills |
| 10 | frontend-design | `frontend-design/` | Anthropic frontend-design plugin |
| 11 | ui-ux-pro-max | `ui-ux-pro-max/`, `design-system/`, `ui-styling/`, `brand/`, `design/`, `banner-design/`, `slides/` | github.com/nextlevelbuilder/ui-ux-pro-max-skill |

Notes
- The `12-principles-of-animation` skill no longer exists in raphaelsalaja's repo. Its current `motion` skill (installed as `rs-motion`) covers the same ground.
- raphaelsalaja's skills are prefixed `rs-` because two names (`prototype`) clash with emilkowalski's.
- `design-taste-frontend` ships a Stop hook that runs its finish gate when a `.taste-skill/` build folder exists. It does nothing otherwise.
- Licences: MIT, except playwright-cli (Apache 2.0). Each upstream LICENSE is kept alongside its skill.
