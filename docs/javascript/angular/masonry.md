# [Masonry](readme.md)

## Description

Pipe pour gérer l'affichage en masonry.

## Pipe

```console
ng g pipe pipes/masonry
```

```javascript
transform(value: any[], numColumns: number, colNum: number): any {
    if (value.length === 0) return value;
    if (numColumns < 1 || colNum < 1 || isNaN(numColumns) || isNaN(colNum) ||colNum > numColumns) {
      console.error("Invalid column configuration");
      return value;
    }
    return value.filter((val, index) => {
      return index % numColumns  === colNum-1;
    });
}
```

## Code HTML

```html
<div class="masonry">
  <div class="column" *ngFor="let col of cols; index as i ">
    <div *ngFor="let car of cars | masonry : 2 : i+1">
      <div class="card">
        <img [src]="car.image" alt="">
      </div>
    </div>
  </div>
</div>
```

## Code TS

```javascript
cols = [ 1, 2]
cars = [
    {id: 1, name: 'hello'},
    {id: 2, name: 'hella'},
    {id: 3, name: 'helli'},
]
```

## Code CSS

```css
.masonry {
  display: grid;
  grid-auto-flow: column;
}
```

