# [Erreurs](readme.md)

## Erreurs

| Erreur | Description |
| :-- | :-- |
| CLASS A POS. LOOP x  | There is an open circuit on the positive side of loop x. Class A and Class X are supervised methods of communicating with addressable devices. If the control panel detects a trouble (open only), it will drive both ends of the loop, maintaining communication in an unsupervised method. The latching trouble will display on the panel as a Class A trouble until you correct the condition and press reset. Class X configuration of the SLC requires the use of ISO-X modules. |
| CLASS A NEG. LOOP x | There is an open circuit on the negative side of loop x. Class A and Class X are supervised methods of communicating with addressable devices. If the control panel detects a trouble (open only), it will drive both ends of the loop, maintaining communication in an unsupervised method. The latching trouble will display on the panel as a Class A trouble until you correct the condition and press reset. Class X configuration of the SLC requires the use of ISO-X modules |
| GROUND FAULT | A ground fault has occurred within the panel. |
| GROUND FAULT LOOP x | There is a ground fault on loop x. |
| HARDWARE MISMATCH | The device installed does not match what was previously installed. Install the correct device. |
<!-- | champ | champ | -->

## Erreurs 2

| Trouble type | Decription | Action |
| :-- | :-- | :-- |
| LOW THRESHOLD | The detector chamber reading is too low; the detector is not operating properly. | The detector must be removed and replaced by an authorized service representative. |
| MISMAT HDWE TYPE | The programming information in the panel’s database for this device does not match the type of device at the address specified | Correct programming. |
| MOD EXT PWR LOSS | The control module or sounder base has lost external power. | Determine whether there is a DC power loss. |
| NCM COMM LOSS | Communication has been lost between the fire panel or DVC and the NCM/HS-NCM (Network Communication Module). | Investigate cause and restore communication |
| NO ANSWER  | The device (module or detector) is not responding to the poll. Either the device is not working or it is not connected properly. | Determine whether the device is functional, and connected and addressed properly on the SLC. |
| OPEN CIRCUIT | The module device has an open circuit on its supervised wiring. | Check the connections from the module to the input or output device to which it is wired. |
| SHORT CIRCUIT | The module device has a short circuit on its supervised wiring. | Check the connections from the module to the input or output device to which it is wired. |
<!-- | champ | champ | champ | -->
