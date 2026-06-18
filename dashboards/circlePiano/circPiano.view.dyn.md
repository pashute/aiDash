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
- chord_switch: The tiny mid circle is a toggle switch (Dark green or gray). It toggles chord mode on or off.
- Scale change: The keys will change colors when the scale is changed in the settings. Active keys will change to the color of the white keys if they are black and to the color of the black keys if they are white. The shapes stay in place. Only the colors change

- Control buttons: 
-- Active buttons: Metronom - default off. 
-- For future. Inactive:  Record/Continue  Pause, Stop