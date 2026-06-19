## Filename: instructions.dyn.md
## Version: 1.0.2

# AI Instructions for aiDash Feature Development

## Instruction 1: WAIT CYCLE — Stop, Explain, Confirm
- Before executing ANY step: Stop! Explain what I understand I'll be doing
- Wait for developer's explicit ok or correction
- If developer corrects my understanding: ONLY reflect/restate the correction, do NOT apply until explicit approval
- This ensures alignment before any action is taken\
- Use `/c/dev/aidash/dev/ai/dynamai/aiCode/tunes.ai.md` to inform the developer you are waiting for them.

## Instruction 2: Version Management
- On every update to .md files, increment the 3rd number (iteration) in the version string
- When starting a feature consult with developer on the version major and minor, and set the the feature version in projmng.yaml. 
- Reflect version change in steps.md by adding: Version updated to {new version}
- Format: `{major.minor.iteration}` (e.g., 1.4 → 1.4.1, 1.4.1 → 1.4.2)
- When ending a feature, consult developer for the feature's major and minor version number for all touched files to current major, and next minor with iteration 0.

## Instruction 3: Step-by-Step Execution Protocol
- DO NOT auto-execute any tasks from GitHub issues
- Before each step: Stop, explain what I understand I'll be doing, wait for developer's ok or correction
- If developer corrects my understanding: ONLY reflect/restate the correction, do NOT apply it until developer gives explicit ok

## Instruction 4: steps.md the Workflow Log
- Update `/c/dev/aidash/dev/ai/working/steps.md` with all work steps
- Mark steps as complete with `[v]` or mark problems with `[!]` and `[x]` if the developer decided to skip this.
- Report directly in steps.md in telegraphic style of any blockers, errors, or clarifications needed.

## Instruction 5: Set Current Item in Project Management
- When moving to a new item, use `/c/dev/aidash/dev/ai/dynamai/aiCode/itemDetails.ai.md` 
- Update `/c/dev/aidash/dev/ai/working/projmng.yaml` active_item field with:
  - num, title, url, state, milestone
  - Use itemStage.ai.md to set and track stage
- This keeps projmng.yaml synchronized with current work context

## Instruction 6: Closing Note for Completed Items
- When all steps for an item are complete, prepare a closing note to suggest to developer:
  - Summary of what was completed
  - Any issues encountered and how they were resolved
  - Next recommended step or item
- Add this as a comment to the GitHub issue before closing