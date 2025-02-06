# [Angular 19](readme.md)

## Version

```bash
ng --version
```

## Upgrade

Mise à jour à partir de la version 18

```bash
ng update @angular/core@19 @angular/cli@19
```

## Importer un composant

```htm
<app-header></app-header>
```

```javascript
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  imports: [HeaderComponent],
})
```

## Boucles

```javascript
@for (item of items; track item.name) {
<li>{{ item.name }}</li>
} @empty {
<li>There are no items.</li>
}
```

[Angular.dev](https://angular.dev/api/core/@for)

## defer

```javascript
@defer ( on <trigger>; when <condition>; prefetch on <trigger>; prefetch when <condition> ) {
  <!-- deferred template fragment -->
  <calendar-cmp />
} @placeholder ( minimum? <duration> ) {
  <!-- placeholder template fragment -->
  <p>Placeholder</p>
} @loading ( minimum? <duration>; after? <duration> ) {
  <!-- loading template fragment -->
  <img alt="loading image" src="loading.gif" />
} @error {
  <!-- error template fragment -->
  <p>An loading error occurred</p>
}
```

[Angular.dev](https://angular.dev/api/core/@defer)

## if

```javascript
@if (a > b) {
  {{a}} is greater than {{b}}
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
```

[Angular.dev](https://angular.dev/api/core/@if)
