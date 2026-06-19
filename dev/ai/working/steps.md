## Filename: steps.md
## Version: 1.0.17

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
  
  - [ ] 3. follow instructions in steppair.mock.dyn.md. Version updated to 1.0.14

- [ ] 4. (#1) verify `dev/ai/working/projmng.yaml`
  - [v] 4.1 project details ok.
    - [v] 4.1.1 current project v2 is number 6 (https://github.com/users/pashute/projects/6)
  - [v] 4.2 current item: item 5 mock test
    - [v] 4.2.1 should be: [item 5 mockTest](https://github.com/pashute/aiDash/issues/5)
    - [v] 4.2.2 parent (and head): feature/StepConsolidator
    - [v] 4.2.3 stage: in progress (use helper dyn)
    - [v] 4.2.4 `projmng.yaml`: set current item: 5
    - [v] 4.2.5 `projmng.yaml`: set current item details (use helper dyn)
    - [v] 4.2.6 `projmng.yaml`: set current-item subitems (use helper dyn)
    - [v] 4.2.7 ai user comment, with mock.dyn file link (use helper dyn)

- [v] 5. (#2) item 5 steps
  - [v] 5.1 get from github issue details heading
    Results: Issue #6 subitems fetched. Steps from issue #6:
    - [ ] make a new file from vanilla `projmng.mock.yaml` in `/dev/ai/mock/working`
    - [x] Fill it by simulating start feature which opens project (dyn already has process to fill it)
  - [v] 5.2 notify developer and wait for ok to continue
  - [v] 5.3 add them at the end of real `working/steps.md` steps
  - [v] 5.4 add planned steps to real `working/projmng.yaml`

- [v] 6. (#3) mock working files
  - [v] 6.1 suggest and discuss fake mock data to developer
    - [v] 6.1.1 steps
    - [v] 6.1.2 projmng
  - [v] 6.2 summarize discussion, beep, and wait for ok to proceed
  - [v] 6.3 make `projmng.mock.yaml` from real vanilla
    - [v] 6.3.1 target mock folder: `/tests/steppair/mock/working/`
    - [v] 6.3.2 source vanilla folder: `dev/ai/dynamai/vanilla`
    - [v] 6.3.3 populate with fake details and plans (as per discussion with developer)
  - [v] 6.4 make `steps.mock.md` from real vanilla
    - [v] 6.4.1 populate with fake details and plans (as per discussion with developer)

- [ ] 7. (#4) stop, beep, and discuss with developer if current steps.md makes sense; wait for ok
- [ ] 8. (#5) after ok, start doing the steps one by one
- [ ] 9. (#6) once all steps till now done
  - [ ] 9.1 beep and summarize changes; ask and wait for developer ok to commit and push
  - [ ] 9.2 if ok received: do silent commit and push
  - [ ] 9.3 discuss `steppair.specs.md` with developer (in `dev/docs/specs/steppair/`), wait for ok
  - [ ] 9.4 copy it to `dashboards/steppair/` as `steppair.dyn.md`
  - [ ] 9.5 test iteratively and confirm it works
  - [ ] 9.6 if something goes wrong, invent a recovery process
  - [ ] 9.7 next item after that is issue 7
  
 
