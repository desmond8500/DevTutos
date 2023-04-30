# [Fichiers et dossiers](readme.md)

## Créer un dossier

```php
$dir = "contrats/$contrat->id/base/";

if (!file_exists($dir)) {
    mkdir($dir, 0777, true);
}
```

## Sources

* []()