# [Modeles](readme.md)

## Personnalisation des champs

* Valeur par défaut

    ```php
    protected $attributes = [
        'delayed' => false,
    ];
    ```

* Définir la base à utiliser pour le modèle.

    ```php
    protected $connection = 'sqlite';
    ```

* Définir les champs qui ne seront pas retournés par les API

    ```php
    protected $hidden = [
        'password',
        'remember_token',
    ];
    ```

* Définir le modèles parents à retourner

  ```php
    protected $with = [
        'model',
    ];

## Ajouter des methodes au modèle

```php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function getFirstNameAttribute($value)
    {
        return ucfirst($value);
    }
}
```

```php
use App\Models\User;

$user = User::find(1);

$firstName = $user->first_name;
```
