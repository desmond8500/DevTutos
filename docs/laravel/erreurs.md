# [Gestion des Erreurs](readme.md)

## curl error 60 ssl certificate problem unable to get local issuer certificate

C'est une erreur qui survient lorsqu'on utilise les requettes Http. Il faut télécharger le certificat [cacert.pem](https://curl.se/docs/caextract.html) et le coller dans le dossier php de la machine. Il faut ensuite modifier le fichier `php.ini`.  

```ini
[curl]
; A default value for the CURLOPT_CAINFO option. This is required to be an
; absolute path.
;curl.cainfo = 
```

```ini
[curl]
; A default value for the CURLOPT_CAINFO option. This is required to be an
; absolute path.
curl.cainfo = "C:\php-7.4.30-Win32-vc15-x64/cacert.pem"
```

Il faudra ensuite redemmarer le terminal

## Route not defined

```php
php artisan optimize
```

## Connection could not be established with host mailhog :stream_socket_client()

```console
php artisan cache:clear
php artisan config:clear
```

## Method Illuminate\Auth\RequestGuard::logout does not exist

C'est lorsque le code `Auth::logout()` ne fonctionne pas il faudra utliser :

```code
auth()->guard('web')->logout();
```

## Fatal error: Array and string offset access syntax with curly braces is no longer supported in /home/Dossier/public/index.php on line 2

Pour corriger le problème il faut aller dans le fichier `/public/index.php` puis supprimer la ligne 2.
