# [Carbon](readme.md)

## Configuration d'une instance carbon

```php
$date = Carbon::now()->settings([
    'locale' => 'fr_FR',
    'timezone' => 'Africa/Dakar'
]);
```

## Getters

```php
echo $date->day; //  Jour en nombre
echo $date->month; // Mois en nombre
echo $date->year; // Année
```

```php
echo $date->dayName; //  Nom du jour
echo $date->monthName; // Nom de mois
```

## Affichage de texte

```php
echo $dt->toFormattedDateString();                 // Dec 25, 1975
```

## Semaines

```php
$date->startOfWeek()->format("d-m-Y")
$date->endOfWeek()->format("d-m-Y")
$date->endOfWeek()->format('l jS \\of F Y h:i:s A')
```

## Format

* d : Jour en nombre
* m : Mois en nombre
* Y : Années en nombre
* l : Jour de la semaine en lettres
* F : Mois complet en lettre

## Comparaison entre un moment du passé et le moment présent

```php
Carbon::today()->diffForHumans()
```

## Sources

* [Source](https://www.gekkode.com/developpement/comment-gerer-datetime-avec-carbon-dans-laravel-php/)
