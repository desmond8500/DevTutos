# [Blink](readme.md)

## Description

Il s'agit de faire clignoter une LED.

* [Projet](https://docs.arduino.cc/built-in-examples/digital/BlinkWithoutDelay/)

## Code

```c
/*
  Blink
  Turns an LED on for one second, then off for one second, repeatedly.
*/

# define LED_BUILTIN 13

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);                      // wait for a second
}

```

## Conenxion

![Schéma](https://docs.arduino.cc/static/c8dbeff786e52681c3d0e9ee9525e140/a6d36/schematic.png)

## Sources

* [Arduino Blink](https://docs.arduino.cc/tutorials/uno-rev3/Blink/)