### Filename: DynamAIt — Explained
- Version: 0.9

---

## What is DynamAI?

DynamAI (Dynamic AI Tasks) is a structured natural language instruction format for coding AI assistants. It sits between a plain chat prompt and actual computer code — readable by both humans and AI, precise enough to be executed reliably, flexible enough to handle real-world development complexity.

A DynamAI file (`.dyn.md`) is a program. The AI reads it, follows it step by step, and treats it as its source of truth for what to do, in what order, and how to handle what goes wrong.

---

## Why DynamAI?

AI coding assistants are powerful but unreliable when given open-ended instructions. They drift, assume, skip steps, and self-confirm. DynamAI solves this by:

- Giving the AI a **explicit sequence** to follow, not a goal to interpret
- Defining **inputs** that can be resolved dynamically from files, state, or conversation
- Defining **verifications** at each step so the AI knows when something succeeded
- Defining **error handling** so the AI stops and reports rather than guesses and continues
- Keeping the **developer in control** — the AI is a team member executing known steps, not an autonomous agent deciding what to do next

---

## File Format

A `.dyn.md` file contains:

### Header
Name, version, description, and intent of this task.

### Input
What the task needs before it can begin. Inputs can come from:
- `projmng.yaml` — the active feature/item context
- `steps.md` — current working state
- Developer confirmation in chat
- A previous DynamAI task's output
- Dynamic resolution during execution (ask if missing)

### Verification
What must be true before the task proceeds. If verification fails, the AI reports and stops.

### Workflow (Pseudocode)
A numbered sequence of steps in plain English. Each step is:
- One action only
- Announced in chat before execution
- Reported in chat after execution
- Followed by a stop if developer input is needed

### Error Handling
Named error cases with explicit responses — what to report, whether to stop, whether to ask.

### On Completion
What to update (`projmng.yaml`, `steps.md`), what to report, and what not to do without explicit developer instruction.

---

## Key Behaviors the AI Follows in DynamAI

- **One step at a time.** Announce, execute, report, wait.
- **Never assume.** If input is missing or ambiguous, ask before proceeding.
- **Never self-confirm.** Confirming something does not mean proceeding — always consult developer first.
- **Halt on errors.** Report clearly, stop, wait for developer instruction. Do not find a workaround and continue silently.
- **Stick to the sequence.** If a better path is found mid-task, suggest it — don't take it.
- **Attribute everything.** All actions, commits, comments, and step updates are attributed to the AI.

---

## Variable Notation

`{varname}` — a placeholder whose value is retrieved from `projmng.yaml`, a PowerShell command, or a prior step's output. This is not Mustache or template syntax — it is a live resolution instruction to the AI.

Examples:
- `{owner}` — repo owner from projmng.yaml
- `{featurename}` — active feature branch name
- `{itemnum}` — current GitHub project item number

---

## Step Status Marks (in steps.md)

| Mark | Meaning |
|------|---------|
| `[ ]` | Not yet started |
| `[v]` | Done |
| `[!]` | Problem — needs attention |
| `[-]` | Deferred or cancelled (reason added inline) |

---

## What DynamAI Is Not

- Not a scripting language — there is no interpreter or runtime
- Not a prompt template — it is a full procedural instruction set
- Not autonomous — the AI executing it is always subordinate to the developer
- Not static — inputs, state, and branching can change dynamically during execution

---

## Relationship to Other Files

| File | Role |
|------|------|
| `instructions.dyn.md` | The AI's standing operating rules — read before anything else, every session |
| `*.dyn.md` | Task-specific DynamAI instruction files (start feature, open item, commit, etc.) |
| `projmng.yaml` | Active feature and item context — read before every task |
| `steps.md` | Running working log — read to recover state, written during execution |
| `*.ai.md` | AI code files — pseudo-tested procedures for actions that commonly fail (e.g. GitHub API quirks) |