# [Swagger](readme.md)

## Installation (laravel 11)

```console
composer require "darkaonline/l5-swagger"
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
```

Il faudra ensuite rechercher le fichier `L5-swagger.php` puis mettre la valeur **Generate_always** à true.  

```php
'generate_always' => env('L5_SWAGGER_GENERATE_ALWAYS', true),
```

Créer un controlleur puis ajouter dedans : 

```php
use Illuminate\Http\Request;

/**
 * @OA\Info(version="1.0",title="Freecust",description="Freecust Backend API")
 */

class IndexController extends Controller
{
    /**
    * @OA\Get(
    *      path="/index",
    *      tags={"Tags"},
    *      summary="Welcome page",
    *      description="Description",
    *      @OA\Response(
    *          response=200,
    *          description="Success",
    *       ),
    *     )
    */

    public function index(){

    }
}
```

## Sources

* [L5-Swagger](https://github.com/DarkaOnLine/L5-Swagger)
* [Youtube](https://www.youtube.com/watch?v=sODdVdIk90c&ab_channel=DavidSilva)