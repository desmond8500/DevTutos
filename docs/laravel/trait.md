# [Laravel Trait](readme.md)

## Description

Les traits sont un moyen pratique de réutiliser du code.

```bash
php artisan make:trait SearchTrait
```

```php
namespace App\Traits;
trait SearchTrait {
    
    public function scopeSearch($query, $search, $name = "name")
    {
        return $query->where($name, 'like', '%' . $search . '%')->orderBy($name);
    }
}
```

```php
class ShareArticle {
    use SearchTrait;

    User::search($this->search);
    User::search($this->search, 'description');
}
```

## Sources

* []()