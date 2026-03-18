# aiDash - Dashboards for AI integration

Version 1.4

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

A specialized editing interface for precise, non-destructive text modification by the AI while chatting with the user, without the need for rewriting the whole document again and again. 

CodeFixer allows the AI to "repair" specific segments of a document according to the user's requests, through a structured dialogue, eliminating the need to re-transmit or rewrite the entire file.

#### Branding & Header
* **Title:** aiDash CodeFixer v{N.nn}
* **Header Row:**
    * **App Name:** "CodeFixer - AI surgically modifying text segments"
    * **App Version:** Derived from the document title. Displayed in a large, high-contrast font for accessibility.

#### Interface Elements
* **Toolbar:**
    * `[+]` **New Code:** Resets editor and sets **Code Version** to 1.0 (requires confirmation).
    * `[!]` **Check-in:** Manually increments the current **Code Version**.
    * `[^]` **Upload** | `[V]` **Download** | `[D]` **Save to Drive** (Gemini integration).
    * `[<.][.>]` **Undo/Redo.**
    * **Language:** Dropdown selector (`js`, `md`, `html`, `json`, `yaml`, `txt`).
    * **Code Version:** Dynamic label `{N.n}` representing the current data state.
* **Editor:** Central surgical area for text input and AI-driven modification.
* **Refinement:** `[Paintbrush]` Colorize | `[Mascara]` Beautify (Targeted block formatting).
* **Interaction:** Instruction prompt input field + `[>]` Send button.
* **Reporting:** `[Report]` button
    * **Visual Indicator:** Lights up **Green** on sync/success or **Red** on version/boundary breach.
    * **Function:** Opens the JSON correction report as an interactive table.

#### Operational Logic
1.  **Version Control:** Code Version starts at 1.0; auto-increments by 0.1 with every successful AI response.
2.  **State Lock:** The editor is locked to read-only from the moment **Send** is pressed until the UI confirms the update is complete.
3.  **Sync-Check:** The outgoing prompt includes the current **Code Version**. The AI must include this version in its JSON header to prove it is referencing the correct state.
4.  **Boundary Guard:** The UI validates all AI-requested changes (Regex find/replace, line:char insertion) against:
    * **Coordinates:** Strict line/character matching.
    * **Prefix/Suffix Check:** Verification of the surrounding text "neighborhood" to prevent off-target edits.
5.  **Rejection:** If a version mismatch or boundary breach occurs, the UI rejects the change, logs the error in the Report, and sets the indicator to Red. 

#### The AI Handshake (JSON)
The AI returns a surgical correction object containing:
1.  **Headline:** A brief, human-readable description of the fix.
2.  **Instructions:** Step-by-step implementation details and technical remarks.
3.  **Status:** `Done` or `Problem` (with specific details on failed boundary matches).
4.  **Audit:** A side-by-side JSON report highlighting the old text vs. new text and the affected line numbers.


## Complex dashboards

### Text-change mapper

Lowers traffic sending a map back and forth, instead of resending the whole file, and sending ror accessing section patches when needed. 

The user shouldn't need to click on anything. Just write the code and "save changes" 
A document map is created by the AI in the initial request. 

Form then on, every AI caused change would mark the affected section dirty, and remap that sections boundaries according to added and removed codelines.  Verified by opening and closing words. 

In user modified sections - we do a "stupid" mapping. We don't anlayze anything, only hope to find remaining sections. Starting from the top of the file For each section, We search for the section before espeically its ending, and for the section after especially it's opening phrase, and recursively update the boundaries of found sections, and of new unkonwn "section spans" after a known sectikon ending and before a next known section beginning.   

Even if the known section is found later, but moved beyond its original location, we are stupid and don't care. All we know is that that section went missing, and that there's a new span of sections later. 

We know she erased 3 lines and added 2 lines on line 23.  
We should first look at the section before this section and check if we have its beginning and end, emphasis on end. 
Then we go to the next section which should start 1 line before its designated start in the old map.  if that isn't found, we look for the next section till we find it.  In most cases it will significantly lower the amount of text sent. 

We don't actually send these changes, just report them to the ai.  Then the ai knows where suspected changes are, and, if it needs to look at any missing code sections, it can ask for it. We give it along with the map. 

When the AI responds with explanations or suggested modifications it appends a new mapping of the (no more) missing sections, that were given in the patches. 

Upon user request by pressing a button (attach all changes), or by using a reserved word in the chat (update all), all the patches are sent. The AIs response includes an updated map. 

In the proposed aiDash patent, the AI can open a channel with the 

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
