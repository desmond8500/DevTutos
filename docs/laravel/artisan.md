# [Commandes Artisan](readme.md)

## Lancer le serveur

Lancer un serveur simple

```console
php artisan serve
```

Lancer un serveur avec une adresse IP personnalisée

```console
php artisan serve --host 192.168.1.1
```

Lancer un serveur avec un port personnalisé

```console
php artisan serve --post 8100
```

## Migration

```console
php artisan migrate:fresh
```

```console
php artisan migrate:refresh
```

## Maintenance

Pour mettre le site en maintenance

```console
php artisan down
```

```console
php artisan up
```

## Cache

Vider le cache

```console
php artisan optimize:clear
```

## Source

* [Cache](https://dev.to/kenfai/laravel-artisan-cache-commands-explained-41e1)
