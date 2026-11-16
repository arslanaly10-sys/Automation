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
| 12 | impeccable | `impeccable/` (skill), `.claude/agents/impeccable-*.md`, hooks in `.claude/settings.json` | github.com/pbakaus/impeccable (Apache 2.0), installed with `npx impeccable install --project --providers=claude` |
| 13 | ppt-master | `ppt-master/` | github.com/hugohe3/ppt-master (MIT, v6.9.0, commit 3af3e8e) |

Notes
- The `12-principles-of-animation` skill no longer exists in raphaelsalaja's repo. Its current `motion` skill (installed as `rs-motion`) covers the same ground.
- raphaelsalaja's skills are prefixed `rs-` because two names (`prototype`) clash with emilkowalski's.
- `design-taste-frontend` ships a Stop hook that runs its finish gate when a `.taste-skill/` build folder exists. It does nothing otherwise.
- Licences: MIT, except playwright-cli (Apache 2.0). Each upstream LICENSE is kept alongside its skill.
- Impeccable adds three hooks (in `.claude/settings.json`, shared with everyone who clones the repo): a quick design check after each Edit/Write on UI files, a deeper pass when a turn ends, and a session-start step. Each does nothing if the skill's script is missing. Its engine is downloaded to `~/.impeccable` on first use, which needs network access to impeccable.style. Update with `npx impeccable update`.
- ppt-master generates editable PPTX decks with Python. Before first use, install its dependencies: `pip install -r .claude/skills/ppt-master/requirements.txt` (Python 3.10–3.14; some routes also need pandoc). Update it by re-copying `skills/ppt-master` from the upstream repo.
