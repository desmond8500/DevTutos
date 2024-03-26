# [Signal](readme.md)

## Description

## Utiliser un signal avec un service

Service

```javascript
count = signal(0)
readonly read = this.count.asReadonly()

getUser() {
    return this.read;
}

setUser(user: number) {
    this.count.set(user);
}
```

Composant principal

```html
<h1>User : {{ _data.read() }}</h1>
```

```javascript
user = this._data.read;

constructor(public _data: DataService) {}

```

Composant secondaire

```html
<h1>User : {{ _data.read() }}</h1>
<button class="btn btn-primary" (click)="set(2)">Set 2</button>
```

```javascript
user = this._data.read;

constructor(public _data: DataService) {}

set(number: number) {
    this._data.setUser(number);
}
```

```html
<h1>User : {{ _data.read() }}</h1>
```


## Sources

* [Youtube](https://www.youtube.com/watch?v=W4G8VUaHZKg&ab_channel=AngularUniversity)