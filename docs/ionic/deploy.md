# [Déploiement](readme.md)

## Description

Faire un puild pour vérifier que le projet n'a pas d'erreurs

```console
ionic build
```

Créer le projet android

```console
ionic cap add android
```

A chaque build il faudra lancer la commande ci dessous pour mettre à jour le projet: 

```console
ionic cap copy
ionic cap sync
```

Ouvrir le projet sous android studio

```console
ionic cap open android
```

Live reload

```console
ionic cap run android -l --external
```

## Sources

* [Ionic](https://ionicframework.com/docs/angular/your-first-app/deploying-mobile)
