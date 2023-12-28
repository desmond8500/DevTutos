# [DashTools](readme.md)

## Description

Controlleur rassemblant des fonctions utiles.

## Retourner une l'extention d'un fichier

```php
 /**
 * Récupérer le type d'un ficher
 * @param file
 */
static function get_file_type($file) {
    $pathinfo = pathinfo($file);

    if ($pathinfo['extension']=="pdf" || $pathinfo['extension']=="txt" || $pathinfo['extension']==".doc"  || $pathinfo['extension']=="docx" || $pathinfo['extension']=="xls") {
        return 'Document';
    }
    
    else if($pathinfo['extension'] == "jpg" || $pathinfo['extension'] == "jpeg" || $pathinfo['extension'] == "png" || $pathinfo['extension'] == "jpg") {
        return 'Image';
    }

    else {
        return 'Autre';
    }

}
```

## Sources

* []()