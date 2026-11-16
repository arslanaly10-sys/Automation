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
| 14 | archify | `archify/` | github.com/tt-a1i/archify (Apache 2.0, v3.2, commit a7ed6fd); LICENSE, NOTICE and third-party notices kept in the folder |
| 15 | diagram-design | `diagram-design/` (skill) and `.claude/commands/` (`/export-diagram`, `/import-drawio`, `/import-excalidraw`, `/import-mermaid`, `/import-plantuml`, `/diagram-profile`, `/diagram-doctor`) | github.com/cathrynlavery/diagram-design (MIT, v2.6, commit f6db0de) |
| 16 | anthropics/skills | `academy-guide/`, `algorithmic-art/`, `brand-guidelines/`, `canvas-design/`, `claude-api/`, `discernment-nudge/`, `doc-coauthoring/`, `docx/`, `internal-comms/`, `mcp-builder/`, `pdf/`, `pptx/`, `skill-creator/`, `slack-gif-creator/`, `theme-factory/`, `web-artifacts-builder/`, `webapp-testing/`, `xlsx/` | github.com/anthropics/skills (Apache 2.0 per skill LICENSE.txt, commit e4bb5d9); `frontend-design/` was already installed and is identical to upstream |

Notes
- The `12-principles-of-animation` skill no longer exists in raphaelsalaja's repo. Its current `motion` skill (installed as `rs-motion`) covers the same ground.
- raphaelsalaja's skills are prefixed `rs-` because two names (`prototype`) clash with emilkowalski's.
- `design-taste-frontend` ships a Stop hook that runs its finish gate when a `.taste-skill/` build folder exists. It does nothing otherwise.
- Licences: MIT, except playwright-cli (Apache 2.0). Each upstream LICENSE is kept alongside its skill.
- Impeccable adds three hooks (in `.claude/settings.json`, shared with everyone who clones the repo): a quick design check after each Edit/Write on UI files, a deeper pass when a turn ends, and a session-start step. Each does nothing if the skill's script is missing. Its engine is downloaded to `~/.impeccable` on first use, which needs network access to impeccable.style. Update with `npx impeccable update`.
- ppt-master generates editable PPTX decks with Python. Before first use, install its dependencies: `pip install -r .claude/skills/ppt-master/requirements.txt` (Python 3.10–3.14; some routes also need pandoc). Update it by re-copying `skills/ppt-master` from the upstream repo.
- archify turns requirements, Mermaid or repository evidence into explorable standalone HTML diagrams and one-page explainers. It needs Node 18+ and has no npm dependencies. It may make an occasional request to its own release manifest to show an optional update reminder (it never auto-updates); set `ARCHIFY_UPDATE_CHECK_DISABLED=1` to turn that off. Output goes to `.archify/` in the working directory.
- diagram-design makes editorial diagrams and charts as self-contained HTML/SVG/PNG. Upstream's `/doctor` and `/profile` commands are installed as `/diagram-doctor` and `/diagram-profile` to avoid clashing with other tools. No telemetry; generated diagrams load fonts from Google Fonts; brand profiles are stored in `~/.diagram-design/profiles/`. PNG export renders in a headless browser (Playwright/Chromium). Update by re-copying `skills/diagram-design` and `commands/` from upstream.
- anthropics/skills: Anthropic's official example and document skills. `doc-coauthoring` ships without its own licence file upstream; it is published in Anthropic's public skills marketplace. Bundled third-party licences are in `ANTHROPIC_SKILLS_THIRD_PARTY_NOTICES.md`. The document skills (docx, pdf, pptx, xlsx) and some others use Python and command-line tools (for example LibreOffice, pandoc, Playwright); see each skill's SKILL.md.
