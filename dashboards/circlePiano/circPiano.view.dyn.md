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