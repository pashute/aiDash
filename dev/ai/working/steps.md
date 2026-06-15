## Filename: steps.md
## Version: 1.2

Reader: [-] deferred, [x] cancelled, [V] no need, [v] done, [=] duplicate, [!] discuss

- DO NOT MARK AS DONE until an explicit done received from the developer.
- DO NOT MOVE TO A NEXT STEP without the developer saying next
- When clearing the file, leave these lines up to the header "Steps for AI" (including that line)

# Steps for AI:

Last action: reopened item 10 (metadata fix) by AI assistant (Cascade)

## Running dynamAI task: 2b.CloseProjdevItem by AI assistant (Cascade)
Project info: aiSpecsDev, feature/WriteSomeSpecs, [10.fix openClose projman item](https://github.com/pashute/aiSpecsDev/issues/10)

### Step 1.0 Record self
1.0.1 **Record dynamAI task:** write to steps.md:
`## Running dynamAI task: 2b.CloseProjdevItem by AI assistant (Cascade)`

1.0.2 Write project info to steps.md:
`Project info: aiSpecsDev, feature/WriteSomeSpecs, [10.fix openClose projman item](https://github.com/pashute/aiSpecsDev/issues/10)`

## fix openClose projman item steps (reopened)

- [x] 0. Fix username error (discussed with developer)
- [x] 1. Check steps and projmng.yaml with reopened item
- [x] 2. Rename files (projdev.yaml → projmng.yaml, .dyn.md, .ai.md extensions, update references)
- [x] 3. Update error handling (create halt.dyn.md, confirmAction.dyn.md, update references, remove inline handling)
- [x] 4. Update all dynamAI files with new references
- [x] 5. Rename projdevUpdate.md to projmngUpdate.dyn.md
- [x] 6. Fix 2b.CloseProjdevItem.md next-item suggestion
- [x] 7. Add openItem failure handling to 2a.OpenProjdevItem.md
- [x] 8. Verify feature subitems stages
- [x] 9. Move item 5 to completed_items
- [x] 10. Add instruction to CloseItem.dyn.md for item description updates
- [x] 11. Update small version on all new files (.dyn and .ai)
- [x] 12. Delete old .md files (after checking for new code)
- [x] 13. Check format.header.md references and update instructions.md
- [x] 14. Move version instructions from format.header to appropriate files (instructions.md, 3.CommitAndPush, 1b.EndFeature)
- [x] 15. Stage and commit old file deletions through dynamAI (3.CommitAndPush)
- [x] 16. Correct confirmAction.dyn.md assurance instructions (first confirmation assurance depends on action, no assurance in second confirmation)
- [x] 17. Disperse format.dynamAI.md:
  - [x] 17.1 Create format.steps.md (lines 77-117)
  - [x] 17.2 Create format.itemComment.md (lines 127-144)
  - [x] 17.3 Update references to new format files
  - [x] 17.4 Delete format.dynamAI.md
- [x] 18. Update 1a.StartFeature.dyn.md Developer's Consent step
- [x] 19. Update 1b.EndFeature.dyn.md Developer's Consent and second confirmation
- [x] 20. Update confirmAction.dyn.md with new structure
- [x] 21. Apply consent message footer to all confirmation steps
- [x] 22. Shorten pseudo sections (remove verifications if in prerequisites)
- [x] 23. Commit changes via dynamAI (3.CommitAndPush)
- [x] 24. Single-consent change:
  - [x] 24.1 Create silentCommitAndPush.dyn.md
  - [x] 24.2 Update 1a.StartFeature.dyn.md consent (show subitems state/stage)
  - [x] 24.3 Update 1b.EndFeature.dyn.md consent (show closed subitems, add silent commit)
  - [x] 24.4 Update 2a.OpenProjdevItem.dyn.md (remove second consent, show steps/subitems)
  - [x] 24.5 Update 2b.CloseProjdevItem.dyn.md (show closed steps/subitems, add silent commit)
  - [x] 24.6 Update 3.CommitAndPush.dyn.md (merge consents, add silent commit)
  - [x] 24.7 Fix all dynamAI last steps to beep and say done

### Ad-hoc fixes: Wait for developer's command for each:
- [v] 1. reset active item - from error.
- [v] 2. debug dev-consent not being requested. Simulate, no code changes.
     if steps.md had an instruction that modified a file's version
     and then "dyn commit (not silent)"
     Is there a waiting developer consent stage at the beginning and is it clear?
     Result: fixed dev-consent recorded as step with id (step number)
- [v] 2.1 consent step instruction in steps.md ([v] 1a, [v] 1b, [v] 2a, [v] 2b, [v] 3)
- [v] 3. datetime for completed item (closeItem.dyn)
  - [v] 3.1 projdev -> projmng and mini version
  - [v] 3.1.1 rename in vanilla/ folder projdev.yaml to projmng.yaml
  - [v] 3.1.2 increase mini version
  - [v] 3.1.3 rename 3rd version digit as "mini version" (iteration number) wherever instructed. (2 dyn files)
  - [v] 3.2 the completed time field for items completed in the vanilla/projmng.yaml
- [x] 4. subitems field ([x] openItem.dyn instructions + [x] projmng quickfix)
- [x] 5. feature: ai ui for steps consolidation (specsdev.ai)
- [x] 6. feature: ren project? specsdev.ai
- [x] 7. feature: bugfix items (option in yaml if is bugfix or feature, branchname fix/...)
- [x] 8. feature: vscode-extensionize specsdev.ai
- [x] 9. feature: tunes.ai (success: ta da da, fail: wa wa wa, warn: SOS)
- [ ] 10. dev folder and file organize
  - [x] 10.1 make and move to folder dynamai/actions/ the 5 action dyn files there
  - [x] 10.2 make and move to folder dynamai/helper/ the rest of the dyn files
  - [x] 10.3 rename instructions.md to instructions.dyn.md and update all refs
  - [x] 10.4 rename in formats/ folder all format.{section}.md to {section}.frmt.md and update all refs
  - [ ] 10.5 find unused files and unused sections and mark them with remark 