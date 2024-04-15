# [Requettes HTTP](readme.md)

## Observables

```javascript
data$.subscribe({
    next: value => console.log(value),
    error: err => console.error(err),
    complete: () => console.log('DONE!')
});
```