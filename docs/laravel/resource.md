# [Resource](readme.md)

## Générer une resource

```console
php artisan make:resource UserResource
```

## Code

```php
return [
    'id' => $this->id,
    'name' => $this->name,
    'email' => $this->email,
    'created_at' => $this->created_at,
    'updated_at' => $this->updated_at,
];
```

## Retourner un utilisateur

```php
Route::get('/user/{id}', function (string $id) {
    return new UserResource(User::findOrFail($id));
});
```

## Retourner une liste d'utilisateurs

```php
 
Route::get('/users', function () {
    return UserResource::collection(User::all());
});
```

## Sources

* []()