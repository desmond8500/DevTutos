# [File input](readme.md)

## Description

Personnaliser un bouton d'upload

## Code

Code HTML

```html
<input type="file" id="file" accept="image/*">
<label for="file"> Choisir un avatar </label>
```

Code CSS

```css
input[type="file"]{
    display: none;
}
label{
    background: blue;
    color: white;
    padding: 5px;
    border-radius: 5px;
}
```
