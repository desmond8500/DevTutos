# [Migration](readme.md)

## Description

Les fichiers de migration

## Migration

Enum :

```php
$table->enum('genre',['Homme','Femme']);
```

## Rollback

```console
php artisan migrate:rollback --step=1
```

## Sources

* []()