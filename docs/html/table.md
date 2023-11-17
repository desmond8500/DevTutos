# [Table](readme.md)

## Attributs de tableau

```htm
<table bgcolor="#efefef">

</table>
```

## Bonnes pratiques

* Ajouter des datacell aux tables

    ```htm
    <table>
        <tr>
             <th>Nom</th>
        </tr>
        <tr>
             <td data-cell="Nom">Nom</td>
        </tr>
    </table>
    ```

## Responsive table

```css
border-collapse: collapse;
```

## Table zebra

```css
tr:nth-of-type(2n){
    background: hsl(0 0% 0% /0.1)
}
```

## Scrolling

```css
overflow-x: scroll;
```

## Sources

* [css](../css/table.md)
