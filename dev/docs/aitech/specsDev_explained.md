### Filename: specsDev_explained
- version: 0.9.1

---

## What is specsDev?

specsDev is a VS Code-based AI-assisted development system that constrains a coding AI to work only on planned, tracked features and bugfixes — nothing more. It uses `.dyn.md` DynamAI task files (See Dynamait explained file) to give the AI a structured, step-by-step workflow anchored to a GitHub Project V2, enforcing gitflow, TDD/BDD, and automated delivery through E2E tests.

The developer talks to the AI in chat. The AI follows the specsDev workflow. Nothing is assumed, skipped, or self-approved.

---

## How It Works

### Session Start
Every session begins with the AI reading two files:

1. **`dev/ai/instructions.dyn.md`** — the AI's standing rules. Defines pace, behavior, variable notation, PowerShell conventions, attribution requirements, and the complete workflow sequence. This is the AI's constitution for the session.
2. **`dev/ai/working/projmng.yaml`** — the active feature and item context. The AI reads this before doing anything else, every time.

The AI then reads `dev/ai/working/steps.md` to recover state if the session was previously interrupted.

---

## The Five Action DynamAI-Task Files

specsDev operates through five core DynamAI action files, executed in a defined loop:

### Once per Feature
| File | Trigger | What it does |
|------|---------|--------------|
| `1a.StartFeature.dyn.md` | Developer says "start feature" | Creates or validates the feature branch, updates `projmng.yaml` and `steps.md` with feature context, confirms scope with developer |
| `1b.EndFeature.dyn.md` | Developer says "end feature" (only after all items closed) | Merges feature branch per gitflow, updates project, closes feature item, never proceeds without explicit developer confirmation |

### Loop per Item
| File | Trigger | What it does |
|------|---------|--------------|
| `2a.OpenItem.dyn.md` | Developer provides item URL | Reads item from GitHub Project V2, populates `projmng.yaml` and `steps.md` with item title, steps, and scope, reviews with developer before proceeding |
| `2b.CloseItem.dyn.md` | Developer says "close item" (only after all steps done) | Updates item status in GitHub Project V2, clears steps, updates `projmng.yaml`, never self-closes |
| `3.CommitAndPush.dyn.md` | Developer says "commit" | Stages only files relevant to active item, lists any out-of-scope files for explicit developer approval, writes comprehensive commit message with item reference and AI attribution, pushes to gitflow branch |

---

## The Working Files

| File | Purpose |
|------|---------|
| `dev/ai/working/projmng.yaml` | Single source of truth for active feature, item, steps, and project metadata. Read before every action. Updated after every DynamAI task completion. |
| `dev/ai/working/steps.md` | Running step log for the active item. Written during execution. Read on session recovery. Cleared after item close. |
| `dev/ai/working/ai-draft.md` | Long-form AI output that won't fit in chat (~9 line limit). Shown to developer one part at a time. |

---

## Core Constraints

### On the Developer Side
- The developer drives pace. The AI waits.
- Every action in a compound instruction is treated as a separate step — the AI stops between them unless told otherwise.
- No commit, push, merge, close, or delete without explicit "go ahead" for that specific action.

### On the AI Side
- Read `projmng.yaml` first. Always. No exceptions.
- Announce every step before executing it. Report after.
- Never assume. Never self-confirm. Never find a workaround and continue silently.
- Flag scope creep immediately and ask whether to open a new item.
- All actions attributed: commits, comments, step entries all carry "Action performed by AI assistant."

---

## Gitflow Enforcement

specsDev enforces gitflow through the Start/End Feature and Commit tasks:
- Features live on `feature/` branches
- Commits go only to the active feature branch
- Merges happen only through `EndFeature`
- The `develop` branch is never touched directly (the AI will clarify if "dev branch" is mentioned)

---

## TDD / BDD and E2E

Each item's steps in `steps.md` follow a test-first sequence:
- Tests are written or referenced before implementation steps
- BDD scenarios anchor the item's acceptance criteria
- E2E tests are part of the close-item verification before `CloseItem` is triggered
- Automated delivery is gated on passing tests — the AI flags any close attempt where tests are not confirmed passing

---

## Variable Notation

`{varname}` placeholders are resolved live during execution from `projmng.yaml`, PowerShell output, or prior step results. Common variables:

| Variable | Source |
|----------|--------|
| `{owner}` | projmng.yaml |
| `{repo}` | projmng.yaml |
| `{featurename}` | projmng.yaml / current branch |
| `{projectID}` | projmng.yaml |
| `{itemnum}` | projmng.yaml / current item |
| `{statusUID}` | Retrieved once, reused from prior GitHub API call |

---

## Recovery After Crash

If VS Code or the session crashes mid-task:
1. AI reads `instructions.dyn.md` — restores its operating rules
2. AI reads `projmng.yaml` — restores feature and item context
3. AI reads `steps.md` — sees last completed step, who did it (AI or developer), and what state was reached
4. AI reports current state to developer and waits for instruction to continue

Attribution in `steps.md` headers (`Last action: {action} by AI assistant`) makes recovery unambiguous.

---

## What specsDev Is Not

- Not an autonomous deployment system — the developer approves every meaningful action
- Not a replacement for the developer's judgment — the AI proposes, the developer decides
- Not a general-purpose AI assistant during a session — it stays scoped to the active item only
- Not opinionated about the stack — it works with any language or framework, constrained only by the project's own conventions