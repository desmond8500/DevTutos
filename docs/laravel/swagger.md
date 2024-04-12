# [Swagger](readme.md)

## Installation (laravel 11)

```console
composer require "darkaonline/l5-swagger"
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
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

* [](https://github.com/DarkaOnLine/L5-Swagger)