# Filename: `circPiano.func.dyn.md`
- Version: 1.0

Functionality:

1. Setup

   1.2 Set up midi according to settings. 
   1.3 Display web permissions accordingly
   1.4 Set up app according to settings.

- Setup should work out of the box.
- Choice of instrument should work.
- Changing the scale key in settings changes the colors of the keys. 
See `view` file. 

2. Webpage App

2.1 Chord switch: 

- Default off (single key mode). 
- Clicking on the `chord_switch` toggle button (the clock cap circle in the middle)
  - toggles chord mode on. 
  - changes guitar icon color to bright green.
 - Toggling it off sets it back to the off color. 

2.2 Clicking on a musical note key: 
 - Same for clicking on the key's letter:

 2.2.1  Clicking on the inner half (inside the octave circle) of each key plays the note an octave lower. 

 Note: Same goes for black keys.

- 2.2.2 Key "glows" - changes color of part of key clicked to purple. Other part of key changes to light purple. Same for the black keys. 
 Hour hand points to the chosen note. 

- 2.2.3 Plays music as long as pressed:

-- i. For chord_mode: plays the chord. 
    - moves the hour hands. See `view`
    - for guitar in midi mode: strums the notes at the setup strumming speed


-- ii. For single note mode:  (chord mode: single note)
  - chord text shows note name letter and sharp or flat (depending on scale). 
  - minute hand points to previous note. (default 1200). 
  - seconds hand to the one before the previous chosen note. 
  - plays the note in the chosen instrument. 