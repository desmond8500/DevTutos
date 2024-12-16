# [Erreurs](readme.md)

## Uncaught TypeError: $(...).modal is not a function

```javascript
$('#modal-id').modal();
```

Correction

```javascript
window.$('#modal-id').modal();
```

## Sources

* []()