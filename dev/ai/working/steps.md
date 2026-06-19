## Filename: steps.md
## Version: 1.0.12

Reader: [-] deferred, [x] cancelled, [V] no need, [v] done, [=] duplicate, [!] discuss

- DO NOT MARK AS DONE until an explicit done was received from the developer.
- DO NOT MOVE TO A NEXT STEP without marking done. 
- DO NOT MOVE TO A NEXT STEP WITHOUT asking the developer and getting an explicit ok to proceed. 
- Use `tunes.ai.md` to notify, before request anything from the developer. 
- 
- When clearing this `steps.md` file, leave these lines up to and including the header line "Steps for AI"

# Steps for AI:

- [v] 1. Current item mocktest
  - [v] 1.1 Use `/c/dev/aidash/dev/ai/dynamai/aiCode/itemDetails.ai.md` to fetch item #5 details (num, title, url, state, milestone). Version updated to 1.0.2
  - [v] 1.2 Update `/c/dev/aidash/dev/ai/working/projmng.yaml` → `active_item` field with item #5 details. Version updated to 1.0.2
  - [v] 1.3 Update GitHub Project V2 (project #6): set feature item #1 stage to "todo" (note: no "ready" stage in this project). Version updated to 1.0.8
  - [v] 1.4 Update GitHub Project V2 (project #6): set item #5 stage to "in_progress" (use `aiCode/itemStage.ai.md`). Version updated to 1.0.9

### ad hoc insersion: 
- [v] ad hoc 1. Developer changed helper/ to helpers/ → check all refs are correct
  Results:
  [v] helpers/ directory exists with all files. Only "helper/" reference is in steps.md task description. All code refs updated correctly.
  
- [v] ad hoc 2. Developer added tunes.ai.md
  - [v] a. Correct the ref in `ai/instructions.dyn.md`. Version updated to 1.0.2
  - [v] b. Advise developer how to hear sounds. Setting: `accessibility.signals.terminalBell: {sound: on}`
  - [v] c. Test that works. ✓ Beeps confirmed in earphones!
  - [v] d. Re-read `ai/instructions.dyn.md` as new src of truth
    Results:
    - WAIT CYCLE: Always stop, explain, wait approval before executing
    - VERSION MANAGEMENT: Increment 3rd number on every .md edit; consult on major.minor at feature start/end
    - CLOSING NOTE: Prepare summary + issues resolved + next step when item complete
  - [v] e. Add a comment to the current item (with dyn):  quick fixes: renamed to helpers/ and tunes.ai.md 
  
### continue with plans


- [X] 2. Explain mock
  - [X] WAS:  2.1 Create `dev/ai/mock/working/mockExplain.md` (version 1.0.1) explaining:
  This was Cancelled by developer. Instead: 
  
  - [ ] 3. follow instructions in steppair.mock.dyn.md
  
 