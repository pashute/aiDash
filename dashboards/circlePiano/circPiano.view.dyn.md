# Filename: `circPiano.view.dyn.md`
- Version: 1.0

UI instructions:  

# View: 
- Create html with the layout instructions. 
Note: In future versions we may allow the Dynamai Task to store the code and reuse it. 

- Use clear id short name for every div and other element. 

- chord_name: The chord text is a clickable element: 
-- When clicked on, changes to an input box

- chord_type: The three chord-type buttons are radio buttons Only one is chosen. Default to Major. (bottom)

- keys: The keys are clickable areas, should respond same as clicking on their text (key letter)
- key octave: The keys are divided in half inside or outside the octave circle. When pressing the key half, that part becomes dark purple, the other half becomes soft purple. Letting go returns both to their original (according to scale) color.
- Inner and outer octave behavior inside or outside the octave circle is the same for the black keys as the white keys. 
- 
- chord_switch: The tiny mid circle is a toggle switch (Dark green or gray). It toggles chord mode on or off.
- 
- Scale change (`scale_keyboard`): 
  - In the settings page, the selected key on scale change keyboard changes to purple. 
  - In the main page, the piano keys on the main circPiano dashboard will change colors when the scale is changed in the settings:
    - Active keys will change to the color of the white keys if they are black.
    - Inactive keys will change to the color of the black keys if they are white.  
    - The shapes stay in place. Only the colors change.
    - _Coding note: use correct html/css or svg/js-fill._
  - Default scale on app startup:  C Major.

- Control buttons: 
-- Active buttons: Metronome - default off. 
-- For future. Inactive:  Record/Continue  Pause, Stop

# Setup page
 **Midi status dot:**
  - 🟢 Green — MS GS Wavetable connected
  - 🟡 Yellow — MIDI permission granted but no device found → Web Audio fallback
  - 🔴 Red — MIDI blocked or unsupported → Web Audio fallback

- **Sound output:**
  - ( ) Microsoft GS Wavetable Synth  # list it as default even if not detected
  - ( ) Browser Web Audio
  - other outputs if detected. 

1. On startup: attempt connection to Microsoft GS Wavetable Synth.
2. If found → MIDI mode, green dot, enable instrument + strumming.
3. If not found → Web Audio fallback, yellow/red dot, disable instrument + strumming.
4. User switching to GS Wavetable radio button → retry MIDI connection.
5. User switching to Web Audio radio button → drop to fallback immediately.
6. Any MIDI send error mid-session → silently fall back to Web Audio, update dot.

7. Instrument view: 

- Always visible.
- **Piano:** always enabled (Web Audio fallback works).

- **Has MIDI** connection: All enabled.
- **Missing MIDI** connection: 
  - Disable: **Sax, Guitar, strum controls:** 
  - Hover message: "Disabled. No MIDI available"

Note: You may set the Guitar strum settings even when another instrument is selected. Actual strumming is heard only for the guitar. 