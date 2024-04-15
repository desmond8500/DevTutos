# [Output](readme.md)

## Description

Permet de faire communiquer un composant enfant avec un composant parent.

## Coté parent

On commence par créer une méthode :

```ts
noter(test: any){
    console.log(test);
}
```

```html
<app-test2 (note)="noter($event)"></app-test2>
```

## Coté enfant

```ts
import { EventEmitter } from '@angular/core';

@Output() note: any = new EventEmitter();

ngOnInit(): void {
    this.note.emit(3)
}
```
