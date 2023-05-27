# [Text](readme.md)

## Nommer les lignes

```html
<table>
    <tr>
        <th>Name </th>
        <th>Action </th>
    </th>
    <tr>
        <td data-cell="name"> </td>
        <td data-cell="action"> </td>
    </tr>
</table>
```

## CCS personnalisé

```css
/* table  */
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

td{
    padding-left: 5px;
}

.table{
    width: 100%;
    border-collapse: collapse;
}

.thead{
    background-color: #D1D2D4;
    padding: 5px;
    padding-right: 10px;
}
.th{
    /* text-align: center; */
}
```
