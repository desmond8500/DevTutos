# [API](readme.md)

## Description

Procédures pour mettre en place une application REST.

- [Installation](base/installation.md)
- [Sanctum](sanctum.md)

## Controlleur

```bash
php artisan make:controller PostController --api
```

## Route

```bash
Route::apiResource('posts', PostController::class);
```

## Tester une API

Vous pouvez tester votre API avec des outils comme Postman, cURL, ou directement dans le navigateur.

- Liste des posts : GET /api/posts
- Créer un post : POST /api/posts (données : title, content)
- Voir un post : GET /api/posts/{id}
- Mettre à jour un post : PUT/PATCH /api/posts/{id} (données : title, content)
- Supprimer un post : DELETE /api/posts/{id}

## Response

```php
/**
     * Reponse API
     *
     * @param boolean $success Description
     * @param string $message Message
     * @param array $data Donnnnées à retourner
     * @return type
     * @throws conditon
     **/
    public static function response($success, $message, $data = null, $code = null)
    {
        if ($success) {
            $response = [
                'success' => $success,
                'message' => $message,
                'data' => $data,
            ];
        } else {
            $response = [
                'success' => $success,
                'message' => $message,
                'error' => $data,
            ];
        }

        if (!$code) {
            if ($success) {
                $code = 200;
            } else {
                $code = 400;
            }
        }

        return response()->json($response, $code);
    }

```

## Validation

```php
static function validation($request, $validate, $message = "Error")
    {
        try {
            $request->validate($validate);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => $message,
                'errors' => $e->errors(),
            ], 422);
        }
    }

```

### Utilisation

```php
    $validated = ResponseController::validation($request,
        [
            'email'=> 'required',
        ]
    )
    if($validated){
        return $validated;
    }

```