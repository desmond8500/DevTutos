# [Swagger](readme.md)

## Description

Swagger est un langage de description d'interface permettant de décrire des API exprimées à l'aide de JSON. Swagger est utilisé avec toute une série d'outils logiciels open source pour concevoir, créer, documenter et utiliser des services Web. [Source](https://fr.wikipedia.org/wiki/Swagger_(logiciel))

## Installation (laravel 11)

```console
composer require "darkaonline/l5-swagger"
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
```

Il faudra ensuite rechercher le fichier `L5-swagger.php` puis mettre la valeur **Generate_always** à true afin que le fichier soit regénéré à chaque actualiastion de page.  

```php
'generate_always' => env('L5_SWAGGER_GENERATE_ALWAYS', true),
```

Créer un controlleur puis ajouter dedans :

```php
use Illuminate\Http\Request;

/**
 * @OA\Info(version="1.0",
 * title="Mon titre",
 * description="Ma superbe API")
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

## Annotation GET

```php
/**
 * @SWG\Get(
 *     path="/users",
 *     summary="Get a list of users",
 *     tags={"Users"},
 *     @SWG\Response(response=200, description="Successful operation"),
 *     @SWG\Response(response=400, description="Invalid request")
 * )
 */
public function index()
{
    // Your API logic here
}
```

## Annotation Post

```php
 /**
 * @OA\Post(
 *      path="/api/login",
 *      tags={"Auth"},
 *      summary="Connexion",
 *
 *      @OA\RequestBody(
 *         @OA\MediaType(
 *             mediaType="multipart/form-data",
 *             @OA\Schema(
 *                  @OA\Property(property="email", type="string"),
 *                  required={"email"},
 *                  @OA\Property(property="password", type="email"),
 *                  required={"password"},
 *
 *             ),
 *         )
 *      ),
 *      @OA\Response(response=200, description="Utilisateurs récupérés avec succès"),
 *      @OA\Response(response=401, description="Unauthorized")
 * )
 */
public function login(){
    return 'login';
}
```

## Générer le fichier

```console
php artisan l5-swagger:generate
```


[lien](http://localhost:8000/api/documentation)

## Sécurité avec un bearer token

Dans le controlleur principal

```php
/**
 * @OA\Info(title="My API", version="1.0.0")
 */

/**
 * @OA\SecurityScheme(
 *     type="http",
 *     description="Use a Bearer token to access this API",
 *     name="Authorization",
 *     in="header",
 *     scheme="bearer",
 *     bearerFormat="JWT",
 *     securityScheme="bearerAuth"
 * )
 */

```

il faut ensuite appliquer la sécurité sur les endpoints: 

```php
/**
 * @OA\Get(
 *     path="/api/example",
 *     summary="Get an example resource",
 *     @OA\Response(response="200", description="Successful response"),
 *     @OA\Response(response="401", description="Unauthorized"),
 *     security={{"bearerAuth": {}}}
 * )
 */
public function getExampleResource()
{
    // Your code for this API method
}
```



## Sources

* [L5-Swagger](https://github.com/DarkaOnLine/L5-Swagger)
* [Youtube](https://www.youtube.com/watch?v=sODdVdIk90c&ab_channel=DavidSilva)
* [docs](https://medium.com/@mark.tabletpc/set-up-laravel-with-swagger-for-comprehensive-api-documentation-step-by-step-instructions-d30552ca8051)