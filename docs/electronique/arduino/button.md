# [Blink](readme.md)

## Description

Il s'agit de faire clignoter une LED.  

* [Projet](https://docs.arduino.cc/built-in-examples/digital/Button/)

## Code

```c
// constants won't change. They're used here to set pin numbers:
const int buttonPin = 2;  // the number of the pushbutton pin
const int ledPin = 13;    // the number of the LED pin

// variables will change:
int buttonState = 0;  // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}

```

![Connexion](https://docs.arduino.cc/static/fb8449b4834dfbbf3c03223c8bc3e5b5/a6d36/schematic.png)

## Sources

* [Arduino Blink](https://docs.arduino.cc/tutorials/uno-rev3/Blink/)