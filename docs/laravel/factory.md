# [Seeders et factories](../readme.md)

## Description

Les seeders et les factories permettent de générer rapidement des données aléatoires et de les charger dans la base de donnée.

## Utilisation

1. Configurer le modèle

    ```php
    class User(){
        use HasFactory;
    }
    ```

1. Créer la factory

    ```console
    php artisan make:factory UserFactory
    ```

1. Personnaliser la factory

    ```php
    protected $model User::class;

    public function definition()
    {
        $genre = fake()->('Female', 'Male');
        return [
            'name' => $this->faker->name,
            'genre' => $genre
        ];
    }
    ```

1. Configurer les seeders

    ```php
    protected $model = Client::class;

    public function run()
    {
        Client::factory(10)->create();
    }
    ```

1. Lancer les seeders

    ```console
    php artisan db:seed
    ```

    Il est possible de vider la base et la recharger avec les données de test.

    ```console
    php artisan migration:fresh --seed
    ```

## Factory Relations

```php
$user = User::factory()
            ->has(Post::factory()->count(3))
            ->create();
```

```php
$user = User::factory()
            ->has(Post::factory()->count(3), 'posts')
            ->create();
```



## Faker



## Sources

* [Laravel](https://laravel.com/docs/10.x/eloquent-factories)
* [Factory](https://kinsta.com/fr/blog/laravel-model-factories/)
