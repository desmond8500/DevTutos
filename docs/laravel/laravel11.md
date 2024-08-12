# [Laravel 11](readme.md)

## Installation

```console
composer create-project laravel/laravel example-app
```

## Livewire

Livewire est une librairie qui permet de dynamiser les pages avec du code PHP

```console
composer require livewire/livewire
```

Publier la page de base

```console
php artisan livewire:layout
```

## Localisation

```console
composer require --dev laravel-lang/common
php artisan lang:add fr
php artisan lang:update
```

## Jquery

Il faut importer Jquery avant tous les autres liens js

```htm
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

## themes

[Tabler](https://preview.tabler.io/index.html)