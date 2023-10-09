# [Validation](readme.md)

## Unique

```php
'email' => 'unique:App\Models\User,email_address'
```

## **exists** Existe dans la base de donnée

```php
private $rules = [
    'user' => 'exists:App\Models\User,id'
]

```

## Date

Antérieur à une date

```php
private $rules = [ 'date' => 'before:date']
```

Antérieur ou égal à une date

```php
private $rules = [ 'date' => 'before_or_equal:date']
```

Postérieur à une date

```php
private $rules = [ 'date' => 'after:date']
```

Postérieur ou égal à une date

```php
private $rules = [ 'date' => 'after_or_equal:date']
```

## Sources

* [Laravel Validation](https://laravel.com/docs/10.x/validation#rule-exists)
