# [Mail](readme.md)

## Test

Configurer [mailtrap](https://mailtrap.io)

1. Créer un compte
2. Configurer le ficher .env

## Créer un mail

```console
php artisan make:mail TestMail
```

Dans le fichier de mail :

```php
public $user;

public function __construct($user_id)
{
    $this->user = User::find($user_id);
}

public function build()
{
    return $this->view('mails.test')
        ->subject(ucfirst($this->message->objet))
        ->with('description', $this->message->description)
        ->attachFromStorage($this->message->file, basename($this->message->file))
    ;

}

```

Dans le controlleur

```php
function contact_mail(Request $request) {

    $message = (object) array(
        'objet' => $request->objet,
        'description' => $request->description,
        'file' => $request->file,
        'files' => Storage::disk('public')->allFiles("mails/$request->user_id")
    );

    if ($request->file) {
        $dir = "mails/$request->user_id";
        $name = $request->file->getClientOriginalName();
        $$message->file = $request->file->storeAS("public/$dir", $name);
    }

    Mail::to(env('MAIL_FROM_ADDRESS', 'freecust@yonkou.info'))
        ->send(new ContactMail($request->user_id, $message));
}
```

## Sources

* [Laravel Mail](https://laravel.com/docs/10.x/mail#configuring-the-sender)
* [Laravel Silo](https://laravel.sillo.org/cours-laravel-8-les-bases-envoyer-un-email/)
