# aiDash - Dashboards for AI integration

Version 1.2

aiDash serves as an "AJAX" for AI to update parts without updating the whole data,
and as a UI for the AI and user to interact with each other visually. 
- The UI creates and sends prompts (json, or natural languge or a mixture of both)
- AI responses control UI elements. 

The UI works with DOM manipulation through Fetch API, interacting with short AI changes, 
limited to sections of the view. 


## Examples:

### Moody dashboard
- [ ] Single slider: From sad to happy.  (with blue sad icon on left, happy bright green icon on right)
  - [ ] Random: Response type: simple / complex 
  - [ ] Random: Response length: sentence / paragraph / short story.
- [ ] Structured text: Because {story}, I am {mood} and {reaction}. 

#### How it works: 
- [ ] Stage 1:  Get AI elaborate mood phrase - according to mood, type and length. 
- [ ] Stage 2:  Get AI created story - that caused mood. keep to type and length. 
- [ ] Stage 3:  Get AI created reaction. Keep to type and length. 

### Added in retrospect:
- [ ] Version
  - [ ] Version control from title. So version change manually up on top.  
  - [ ] Version shown on panel
- [ ] Progress bar:  Nice lit up green 6 parts. one for step start one for step end. 
= [ ] Slider
  - [ ] Slider verticle. 
  - [ ] With notches.  Large in mid, regular on quarters and ends.
- [ ] Examples in prompts.
  - [ ] Given according to complexity and length.
  - [ ] Result from last step fed into next step

### Code fixer

The code fixer fixes the desired text segments that need fixing, without touching the rest of the code. 

The HTML is as follows:  codeFix.html

- All icon-buttons. Hovering over shows what they do.

- btn: [+](New Code, are you sure?  yes: clear)
- btn: [!](Check in, currently only updates version number)
- btn: [^](upload)
- btn: [V](Download)
- btn  [D](Save to drive, use Gemini logged in user)

- btns: [<.](undo) [.>](redo)

- choice: [Language choice  V](js, md, text, html, json, yaml)       
- autotext: Version: {N.n}

- [ code area
- ]

- btns: [Paintbrush](colorize)   [Mascara](beautify)

- [ input: Instructions Prompt                                         ]  btn:[>](Send)
- grayedBtn: [Printer](Report) // shows JSON report with close button as a table.  

#### Instructions
##### Version
- New code starts at version 1 
- Version autoincrements by 1 per AI response.

##### Sections
- Code lock: From SEND pressed and until done updating, the code is locked to editing.
- The json prompt sent talks to the AI in two stages

##### Possible fixes:  

sequences of any of the following: 
   - find/replace (regex)  // for each replacement this checks we were in section boundary
                          //   will reject changes done outside boundaries and report. 
                          // if this cannot be done, it should reject all and report
   - replace codeline.
   - insert text (from line:char) // reports how many lines and chars added
   - replace string (from line:char,  to line:char) // calculates what was removed and inserted till now. 
  
##### Fixed Sections

- The corrections should be given as a json with each fix with:   
1. Fix headline.
2. Fix instructions
2.1 fix instruction. 
2.2 fix remarks if needed. 
3. Status:  Done, Problem (with details)

As the corrections are being made, create a correction json report
with the lines of old and new text. (and line number)



## Complex dashboards

### JSON to Markdown viewer and WYSYWIG editor

- JSON to markdown
- view
- edit
- show raw code

### Tasker - 

Playing a sequence of JSON prompts storing and using results from one task for others. 
Slide show like:  Presents


### AI Lipsync

- Lipsync AI chat text to speech after play button pressed.
- Stage 1: mouth only
- Phonetic text

### Chord analyzer and viewer

- Analyzes chord played in audio file
- Breaks music into  4 or 6 beat phrases. 
- Synchronizes presenting chord in phrase while playing. 
