# [Laravel Permission](readme.md)

## Installation

```console
composer require spatie/laravel-permission
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
```

## Configuration

Ajouter le trait :

```php
class User extends Authenticatable
{
    use HasRoles;

    // ...
}
```

## Créer une permission

```php
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

$role = Role::create(['name' => 'writer']);
$permission = Permission::create(['name' => 'edit articles']);
```

## Sources

* [Laravel Permission](https://spatie.be/docs/laravel-permission/v6/installation-laravel)