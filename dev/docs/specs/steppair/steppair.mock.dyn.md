# Filename: steppair.mock.dyn.md
- Version: 0.9

Prepare a mock environment for creating and testing the steppair aidash. . 

See `steppair.readme.md`  for an explanation of what steppair is and how it will be used. Read the vocabulary section to understand the terms used here. 

See the '/dev/docs/aitech/` directory for deeper explanations. 

The `steppair` specs are in `steppair.specs.md`

# Purpose: 
During testing we do not wish to change any real code, or close the real item we are working on. (Reminder: We are developing this StepConsolidator AI dashboard and have a real feature branch we are working, real steps for development etc.) 

The Steps Consolidator is a tool for the development-assisting AI to use, to show the human developer what is happening and to get feedback from the developer's  interactions with a visual interface. Step consolidation is needed just before closing a project management item which includes: 

- finishing all planned steps
- committing and pushing all changes
- cleaning the steps file 
- In the project: 
  - setting workflow stage to done 
  - setting state to closed, with a clear closing comment.



So we need a "mock environment" for testing. A fake Close-Item action file (this file) that will look at a fake project-management "feature" and report it in a fake `steps.md` report file, then compare it with a fake `project-management` items and steps recording file (a fake `projmng.yaml`). 

The testing mock files will be in `/dev/tests/steppair/mock/working`

The actual `steppair.dyn.md` being tested, along with any html will be in `dashboards/steppair/`

Of course this example shows how an iterative process of development where the tools for developing are being added into the process and the two parts of the humandAI team - the human and the AI - partner to create a better development experience as needed.

# Listing for steps.md
### Copy these to (the real) steps.md, with replaced {n} step numbers. 

- == `steppair.mock.dyn.md` by ai assistant ==
- [ ] {n}. (#1) verify  `dev/ai/working/projmng.yaml`: 
  - (update with any missing data. use helpers .dyn files and aicode .ai files)
- [ ] (1.1) project details ok. 
  - current project v2 is number 6 (https://github.com/users/pashute/projects/6)
- [ ] (1.2) current item:  item 5 mock test: 
  - should be: [item 5 mockTest](https://github.com/pashute/aiDash/issues/5)
  - [ ] (1.2.1) parent (and head): feature/StepConsolidator. 
  - [ ] (1.2.2) stage: in progress. (use helper dyn)
  - [ ] (1.2.3) projmng.yaml: set current item: 5 
  - [ ] (1.2.4) projmng.yaml: set current item details. (use helper dyn)
  - [ ] (1.2.5) projmng.yaml: set current-item subitems. (use helper dyn)
  - [ ] (1.2.6) ai user comment, with mock.dyn file link (use helper dyn)

  - [ ] {n}. (#2) item 5 steps: 
    - (2.1) Get from github issue details heading. 
    - (2.2) Notify developer and wait for ok to continue
    - (2.3) Add them at the end of the real `working/steps.md` steps 
    -- i.e. after end of these `steppair.mock.dyn` steps in the `steps.md` list
    -- Each step with checkbox and continued step index
    - (2.4) Add planned steps to real `working/projmng.yaml` 

  
  - [ ] {n}. (#3) mock working files
    - [ ] (3.1) Suggest and discuss fake mock data to developer. 
      - [ ] (3.1.1) projmng
      - [ ] (3.1.2) steps
      - Summarize discussion, beep, and wait for ok to proceed. 

    - [ ] (3.1) Make `projmng.mock.yaml` from real vanilla.
      - Target mock folder: `/tests/steppair/mock/working/`
      - Source vanilla folder: `dev/ai/dynamai/vanilla`

      - [ ] (3.1.1) Populate with fake details and plans 
      - (as per discussion with developer)
    - [ ] (3.2) Make steps.mock.md from real vanilla
      - [ ] (3.3.1) Populate with fake details and plans 
        (as per discussion with developer)

   - [ ] {n}. (#4) Stop, beep, and discuss with developer if current steps.md make sense. Wait for ok. 

   - [ ] {n}. (#5) after ok, start doing the steps one by one. 

   - [ ] {n}. (#6)  once all steps till now done 
     - [ ] (6.1) beep and summarize changes 
               - ask and wait for developers ok to commit and push. 
    - [ ] (6.2) if ok received: do silent commit and push.
     - [ ] (6.3) discuss `steppair.specs.md` with developer 
       - in `\docs\dev\specs\steppair\`
       - wait for ok, and only then...
       - [ ] (6.4) copy it to dashboards/steppair as steppair.dyn.md
       - [ ] (test it see if iteratatively works)
       - [ ] (6.5) if something goes wrong invent a recovery process.
       
       - [ ] Next item after that is issue 7. 

