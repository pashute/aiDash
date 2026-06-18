# Filename: `circPiano.layout.dyn.md`
- Version: 1.0
- 
# 1. Round piano clock:


1. **Circular Piano:** Draw a circular piano keyboard as seen from the inside looking out — like you're standing in the middle of a piano.

2. **Keys:** One octave (D to C) wraps the full 360°, D at 12 o'clock.
   - 2.1 **White:** Wide ivory wedges, hairline seams between them. Note letter in bold dark brown near the outer rim, double the hour digit size.
   - 2.2 **Black:** Narrower, darker, shorter, on top of white keys at the outer edge, stopping ~85% down.
   - 2.3 **Gap:** No black key between E and F (around 2–3 o'clock), and not between B and C (around 9-10 o'clock).
   - 2.4 **Octave circle**  draw a dotted circle halfway through keys. "Below it" in the inner part, the keys will play an octave lower. 

3. **Background:** Near-black.

4. **Middle clock and controls:** Hollow center doubled in size relative to the key ring, dark, with 12 tiny amber hour digits (0 replacing 12) and three clock hands. 

   - 4.1 **Clock hands:** The clock is not functional for showing time, only for indicating the notes and chords played. 
     - Hour hand pointing to the hour of the currently selected note (default 12/0). 
     - Minute hand pointing to the previous note played (default hour 1). 
     - Seconds hand pointing to the note played before that. 
     - In chord mode the minute and seconds hands point to the two other notes of the chord. 
   - 4.1 **Center cap:** `chord_mode_button` - A circular classic-guitar icon-button toggles chord_mode on or off (to single note mode). Glowing darkish green for on. dark pink for off.
   - 4.2 **Chord text:** Left of the center cap — small dark box, chord name in subheading-size bold warm cream.
   - 4.3 **Buttons:** Right of center cap, three short thin buttons stacked:
     - [−] minor: deep red background, light text
     - [7] seventh: bright warm yellow background, dark text
     - [+] major: bright lime-green background, dark text
     - All labels bold.

5. **Outer ridge:** Thin warm gold trim line at the outer edge.

6. **Settings:** A large settings cog icon button on the top right 

7. **Control area:** Top left: 3 icon-buttons: 

- Metronome icon. Toggles metronome on or off. 
- Grayed out: Toggle: Record/Pause/Continue. Icon cycles through when pressed. Currently inactive. 
- Stop recording icon. Currently does nothing. 


# 2. Settings page

1. Midi setup: 

- **Midi status:** colored dot + text (see View)
- **Sound origin:** three radio buttons (see View)
- **MIDI output:** [dropdown] — lists available MIDI outputs

- 1.0 `Connected` indicator (green yellow red: connected, permissions, failed)
- 1.1 Channel - constant: 1
- 1.2 Automatically brings up permissions web page
- 1.3 Default to work out of the box with web midi
- 1.4 anything else? drivers/system?  Not sure about this

2. Instrument:  a. Piano, b. Sax, c. Guitar  
2.1 Strum speed (0-4 fastest)
2.2 Strum pattern:  

-- () d---. # (single strum)  
-- () d-du,udu-,   
-- () d-d-,dudu,  
-- () custom: [ ]  

3. Metronome
3.1 Metronome sound: 3 choices: () tick, () drum, () beep
3.2 Metronome bpm: default 110

4. Scale
4.1 Scale key  tiny piano keyboard octave for scale choice
  4.1.1 Current scale is purple.
4.2 Scale type choice:  Major, Minor, Romanian
4.3 Default (page start) scale: C Major
4.4 Keyboard colors change, following any scale settings change. See the `view` instructions. 