# [Laravel Cashier Stripe](readme.md)

## Description

C'est une librairie qui permet de gérer les paiements avec stripe.

## Installation

```bash
composer require laravel/cashier
```

```bash
php artisan vendor:publish --tag="cashier-migrations"
```

```bash
php artisan migrate
```

```bash
php artisan vendor:publish --tag="cashier-config"
```

## Configuration

Il faut modifier le model `User`.

```php
use Laravel\Cashier\Billable;
 
class User extends Authenticatable
{
    use Billable;
}
```

## Créer utilisateur

```php
function add_user_account($user_id)
{
    $user = User::find($user_id);
    $stripeCustomer = $user->createAsStripeCustomer([
        'name' => "$user->firstname $user->lastname",
        'email' => $user->email,
    ]);

    return $stripeCustomer;
}
```

Il est possible de créer un compte s'il n'existe pas.

```php
$stripeCustomer = $user->createOrGetStripeCustomer();
```

## Mettre à jour un utilisateur

```php
$stripeCustomer = $user->updateStripeCustomer([
    'name' => "$user->firstname $user->lastname",
    'email' => $user->email,
]);
```

## Solde d'un utilisateur

```php
$user->balance()
```


Dans le fichier .env

```sh
STRIPE_KEY=your-stripe-key
STRIPE_SECRET=your-stripe-secret
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

## Sources

* [Cashier](https://medium.com/@maulanayusupp/how-to-integrate-stripe-payment-in-laravel-630b78db38e5)
