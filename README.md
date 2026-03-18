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

### CodeFixer - the surgical AI editor

Fixing only infected sections of code without affecting other parts. 

A specialized editing interface for precise, non-destructive text modification by the AI while chatting with the user, without the need for rewriting the whold document again and again. 

#### Interface Elements (`codeFix.html`)
* **Toolbar:**
    * aiDshname: **CodeFixer** - The aiDashboard that can update a section of code. 
    * `[+]` **New code:** Clears editor and resets version to 1 (requires confirmation).
    * `[^]` **Upload** | `[V]` **Download** | `[D]` **Save to Drive** (Gemini integration).
    * `[<.][.>]` **Undo/Redo.**
    * **Language:** Dropdown selector (`js`, `md`, `html`, `json`, `yaml`).
    * **Code Version:** Dynamic auto-incrementing label `{N.n}`.
* **Editor:** Central text area for code input and modification.
* **Refinement:** `[Paintbrush]` Colorize | `[Mascara]` Beautify.
* **Interaction:** Instruction prompt input field + `[>]` Send button.
* **Reporting:** `[Printer]` (Grayed/Active) Displays JSON correction report as a table.

#### Operational Logic
1.  **Version Control:** Starts at v1.0; auto-increments with every AI response.
2.  **State Lock:** Editor is locked to read-only from the moment **Send** is pressed until the update is complete.
3.  **Validation:** AI performs fixes via regex find/replace, line-char insertion, or string substitution.
4.  **Boundary Guard:** All changes are verified against section boundaries. Operations outside these bounds are rejected and reported.

#### The AI Handshake (JSON)
The AI returns a structured correction object containing:
1.  **Headline:** Brief description of the fix.
2.  **Instructions:** Specific implementation steps and remarks.
3.  **Status:** `Done` or `Problem` (including detailed error descriptions).
4.  **Audit:** A side-by-side JSON report comparing old and new text with line numbers.

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
