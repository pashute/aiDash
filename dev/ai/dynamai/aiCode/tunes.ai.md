## Filename: tunes.ai.md
**Version:** 1.0.1

# Tunes AI - Sound Effects for DynamAI

Provides sound notifications for different states in DynamAI workflow.

Reminder for developer:  
- To hear sound, set the VSCode setting `terminal.integrated.enableBell` to `true`. 
- Each beep is the frequency and duration

## Sound Effects

### Success Tune
**Pattern:** ta dada dah-dum, tah dah!
```powershell
[console]::Beep(349, 400);  # F
[console]::Beep(261, 200);  # C
[console]::Beep(261, 200);  # C
[console]::Beep(293, 400);  # D
[console]::Beep(261, 800);  # C
[console]::Beep(329, 400);  # E
[console]::Beep(349, 800);  # F
```

### Fail Tune
**Pattern:** wa wa wa waah
```powershell
[console]::Beep(466, 300)  # B♭
[console]::Beep(440, 300)  # A
[console]::Beep(415, 300)  # A♭
[console]::Beep(392, 600)  # G
```

### Warn Tune (Needs your urgent attention)
**Pattern:** SOS!
```powershell
[console]::Beep(400, 200);  # Short
[console]::Beep(400, 200);  # Short
[console]::Beep(400, 200);  # Short
[console]::Beep(400, 400);  # Long
[console]::Beep(400, 400);  # Long
[console]::Beep(400, 400);  # Long
[console]::Beep(400, 200);  # Short
[console]::Beep(400, 200);  # Short
[console]::Beep(400, 200);  # Short
```

### Waiting Tune (Needs your attention)
**Pattern:** 3 long beeps ...
```powershell
[console]::Beep(261, 400);  # C
[console]::Beep(329, 400);  # E
[console]::Beep(261, 400);  # C

```

## Usage

Call the appropriate tune from DynamAI files:
- Success: After completing a task successfully
- Fail: When an error occurs and task halts
- Warn: When a warning or critical issue is detected
- Waiting: When we need 

## Integration

To integrate into DynamAI files, add the beep commands at appropriate locations:
- End of successful steps: Success tune
- Error handling blocks: Fail tune
- Warning conditions: Warn tune
