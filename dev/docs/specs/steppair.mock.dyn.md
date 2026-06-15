# Filename: steppair.mock.dyn.md
- Version: 0.9

Prepare a mock environment for creating and testing the steppair aidash. . 

Specs are in /dev/docs/specs/steppair.specs.md
.dyn.md files and dynamait is explained in /dev/docs/aitech/dynamait_explained.md

# General:  

- The aidash dashboards are explained in the readme and in the patent.md 
- specsDev is only partially installed here, mainly for the dyn.md helper files.  
We are not working (yet) here with gh proj v2 
therefore we don't have the instructions.dyn.md file and the actions folder with its files installed.
- See /dev/aitech folder with both explanation md files on specsDev and dynamait. 

We are making an ai dashboard with a .dyn.md dynamai task instruction set according to /dev/docs/specs/steppair.specs.md. 

The html and dyn.md (and if needed .ai.md) will be in /dashboards/steppair

We'll need a sample fake /dev/ai/working projmng.yaml and steps.md (we are not working with specsDev right now). these will be in /dev/ai/mock/working

# 1. Recording steps 
  - [ ] 1.1 Please make a steps.mock.md in /dev/ai/mock/working/ 
  - [ ] 1.2 follow `aiCode/steps.ai.md`  and `formats/steps.frmt` 
  - [ ] 1.3 start recording all steps including these steps 1.1, 1.2 and 1.3

# 2. Mock files. 
- 
- 2.1 Please make a projmng.mock.yaml in /dev/ai/mock/working/
- 2.2 use the format of `/dev/ai/dynamai/formats/projdev.frmt.md`
in it put the project details:  
  current project v2 is number 6 (https://github.com/users/pashute/projects/6)
  get project details with the projectDetails.ai.md
- start feature number 5 (https://github.com/pashute/aiDash/issues/5) mockTest (without changing branch. we stay on main). get itemParams and itemDetails with the ai  after parsing url (https://github.com/{owner}/{repo}/issues/{itemnum})
get subitems using `aicode/subItems.ai.md` and list them in the `projmng.mock.yaml` according to its format file (listed above).

- set current item  to https://github.com/pashute/aiDash/issues/7
- with its details. move it to workflow stage `in progress` (use `itemStage.ai.md`)
