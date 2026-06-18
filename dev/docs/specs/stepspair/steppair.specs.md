### Filename: steppair.specs.md
- Version: 0.9.1


# StepPair — Project Specification

---

## Feature: steppair.dyn.md — DynamAI Instruction File

### Subitem: Input Sources
- [ ] 1. Read `steps.md` from working directory as actual steps
- [ ] 2. Read `projmng.yaml` from working directory as planned steps
- [ ] 3. Validate both files exist and are parseable; report missing or malformed files to developer before proceeding
- [ ] 4. Extract planned steps as ordered list with original indices preserved
- [ ] 5. Extract actual steps as ordered list with original indices preserved

### Subitem: Auto-Consolidation on Session Start
- [ ] 1. Attempt category suggestion from planned step content
- [ ] 2. Attempt assignment of planned steps into suggested categories
- [ ] 3. Attempt pairing of actual steps to planned steps by semantic similarity
  - [ ] 3.1. Unpaired actuals assigned to best-matching category if no planned match found
  - [ ] 3.2. All unmatched items remain in No Category
- [ ] 4. Record confidence score for each pairing and category assignment
- [ ] 5. Mark all auto-assigned items as pending (orange / question-mark state)
- [ ] 6. Report summary to developer in chat: counts of paired, unpaired, categorized, and unresolved items

### Subitem: Presentation Instructions
- [ ] 1. Write consolidated state into `steppair.html` after auto-consolidation
- [ ] 2. Instruct developer to open `steppair.html` in VS Code Live Preview
- [ ] 3. After each developer interaction, rewrite relevant section of `steppair.html` to reflect new state
- [ ] 4. Notify developer in chat of every state change made to the HTML

### Subitem: Interaction Handling
- [ ] 1. Accept developer instruction via chat to trigger any of: Suggest, Categorize, Pair, Undo, Redo, Reset, Clear, Export
- [ ] 2. On Suggest: regenerate category suggestions, different from previous attempt, mark as pending
- [ ] 3. On Categorize: reassign planned steps to current categories, mark as pending
- [ ] 4. On Pair: reassign actual steps to planned or categories, mark as pending
- [ ] 5. On Undo/Redo: revert or reapply last state change, update HTML
- [ ] 6. On Reset: clear all pairings and categorizations, keep steps and categories, return all to No Category
- [ ] 7. On Clear: empty all content, reset to blank state
- [ ] 8. On Export: generate markdown hierarchy, present in chat and instruct developer to copy from HTML window
- [ ] 9. On developer drag interaction in HTML: read resulting state from HTML, update internal state, confirm in chat
- [ ] 10. On developer approval of pending item (checkbox): remove pending mark, confirm in chat
- [ ] 11. On developer rejection of pending item (X): move item to No Category, confirm in chat
- [ ] 12. On developer Save of AI session: accept all remaining pending items, clear all markings
- [ ] 13. On developer Retry: undo last AI action and attempt fresh alternative

### Subitem: Completion Conditions
- [ ] 1. Declare session complete when all planned steps are categorized and all actual steps are paired or explicitly dismissed
- [ ] 2. On completion: present export, summarize unresolved items, offer discussion
- [ ] 3. If unresolved items remain: open discussion with developer — list each unresolved planned step and ask for direction
  - [ ] 3.1. Options per unresolved item: dismiss, reassign, flag for later, add note
- [ ] 4. Close session only after developer confirms or exports

### Subitem: Error Handling
- [ ] 1. On file read failure: report clearly, wait for developer to fix, do not proceed
- [ ] 2. On pairing confidence below threshold: flag item as low-confidence, do not auto-accept
- [ ] 3. On HTML write failure: report in chat, output state as markdown fallback in chat
- [ ] 4. On developer instruction not understood: ask one clarifying question, do not guess

---

## Feature: steppair.html — Visual Presentation Layer

### Subitem: Layout
- [ ] 1. Three columns: Category | Planned | Actual
- [ ] 2. Control sidebar on the far left with all action buttons
- [ ] 3. No Category group rendered at top of all columns as default zone
- [ ] 4. Category rows span all three columns as full-width labeled dividers
- [ ] 5. Separator line above and below each category block
- [ ] 6. Each category block ends after its last planned/actual row

### Subitem: Sidebar Controls
- [ ] 1. Suggest button
- [ ] 2. Categorize button
- [ ] 3. Pair button
- [ ] 4. Undo button
- [ ] 5. Redo button
- [ ] 6. Reset button
- [ ] 7. Clear button
- [ ] 8. Export button

### Subitem: Column Headers
- [ ] 1. Each column header shows edit pencil icon and X button
- [ ] 2. Clicking pencil opens multiline textbox with Save button below header
  - [ ] 2.1. Opening another column's textbox closes current one
  - [ ] 2.2. Clicking Save closes textbox
  - [ ] 2.3. Each line in textbox becomes a draggable step item on Save
  - [ ] 2.4. Lines without `- [ ]` prefix have it prepended automatically
  - [ ] 2.5. Lines already having dash and/or checkbox kept as-is
- [ ] 3. Clicking column X clears that column's content only
  - [ ] 3.1. Category X: clears categories, No Category remains
  - [ ] 3.2. Planned X: planned steps removed, paired actuals remain but lose planned association
  - [ ] 3.3. Actual X: actual steps removed, pairings dissolved, planned steps remain

### Subitem: Step Items
- [ ] 1. Each step rendered as draggable item showing `- [ ] Step text`
- [ ] 2. Double-click to edit inline; Enter to confirm
- [ ] 3. Delete key on focused item to delete it
- [ ] 4. Pending state: orange highlight, question-mark badge, inline ✓ and ✗ controls
  - [ ] 4.1. ✓ accepts item: removes orange and question-mark
  - [ ] 4.2. ✗ rejects item: moves to No Category, removes markings

### Subitem: Drag and Drop — Planned Steps
- [ ] 1. Drag into category block: step moves under that category
- [ ] 2. Drag to No Category: removes from category
- [ ] 3. Drag to reorder within category

### Subitem: Drag and Drop — Actual Steps
- [ ] 1. Drag onto planned step: pairs them; actual appears to right of planned on same row
- [ ] 2. Multiple actuals on one planned: stack below each other in Actual column
- [ ] 3. Drag onto category block with no planned target: associates with category only
- [ ] 4. Drag out of pairing: unlinks, returns to No Category

### Subitem: Categories
- [ ] 1. Drag category block up/down to reorder; all associated steps move with it
- [ ] 2. Double-click to rename; Enter to confirm
- [ ] 3. Delete key to delete category; steps inside return to No Category

### Subitem: Export Window
- [ ] 1. Opens plain text window with markdown hierarchy
- [ ] 2. Copy to Clipboard button
- [ ] 3. Format:
  - [ ] 3.1. `- Category Name`
  - [ ] 3.2. `-- Planned step`
  - [ ] 3.3. `--- Actual step`

---

## Feature: Future Items (out of scope, logged for later)

### Subitem: Step Status Marking
- [ ] 1. `[v]` done, `[x]` cancelled, `[!]` problem on actual steps
- [ ] 2. Actual marking reflected on paired planned step

### Subitem: Organize
- [ ] 1. Organize button splits export into succeeded and failed planned steps