# [Tableau](readme.md)

## Description

## Conversion d'une chaine de caratère en tableau

```javascript
const string = 'word';

// Option 1
string.split('');

// Option 2
[...string];

// Option 3
Array.from(string);

// Option 4
Object.assign([], string);

// Result:
// ['w', 'o', 'r', 'd']

```

## Sources

* [Tableau](https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/)
