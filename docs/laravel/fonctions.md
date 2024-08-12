# [Fonctions](readme.md)

## Description

## Reduce

The reduce method reduces the collection to a single value, passing the result of each iteration into the subsequent iteration:

```php
$products = [
	['name' => 'Product 1', 'price' => 12, 'discount' => 7,],
	['name' => 'Product 2', 'price' => 20, 'discount' => 5],
	['name' => 'Product 3', 'price' => 25, 'discount' => 8],
];

$result = collect($products)->reduce(function ($total, $item) {
	$total['price'] += $item['price'];
	$total['discount'] += $item['discount'];
	return $total;
}, ['price' => 0, 'discount' => 0]);

return $result;

```

```json
{
	"price": 57,
	"discount": 20
}
```

## pipe

The pipe method passes the collection to the given closure and returns the result of the executed closure:

```php
$products = [
	['name' => 'Product 1', 'price' => 12, 'discount' => 7,],
	['name' => 'Product 2', 'price' => 20, 'discount' => 5],
	['name' => 'Product 3', 'price' => 25, 'discount' => 8],
];

$result = collect($products)->pipe(function ($collection) {
	return collect([
		'price' => $collection->sum('price'),
		'discount' => $collection->sum('discount'),
	]);
});

return $result;

```

```json
{
	"price": 57,
	"discount": 20
}

```


[Source](https://camkode.com/posts/how-to-sum-multiple-colums-in-Laravel-collection)

## Redirection

```php
return to_route('name');
```

## Get route name

```htm
{{ request()->route()->getName() }}
```

## Sources

* []()