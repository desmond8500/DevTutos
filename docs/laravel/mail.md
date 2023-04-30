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
public function build()
{
    return $this->view('_tabler.mails.report_mail');
}
```

```php
public function build()
{
    return $this->from($user)->view('_tabler.mails.report_mail');
}
```

## Sources

* [Laravel Mail](https://laravel.com/docs/10.x/mail#configuring-the-sender)
* [Laravel Silo](https://laravel.sillo.org/cours-laravel-8-les-bases-envoyer-un-email/)
