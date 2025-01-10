# [Déploiement](readme.md)

## Installation de capacitor

Installation de capacitor CLI :

```console
npm install @capacitor/core @capacitor/cli
```

Installer la plateforme désirée :

```console
npm install @capacitor/android
npx cap add android
npm install @capacitor/ios
npx cap add ios
```

Ouvrir le projet 

```console
npx cap open android
```


## Description

Faire un build pour vérifier que le projet n'a pas d'erreurs.

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
npx cap open android
```

Live reload

```console
ionic cap run android -l --external
```

## Sources

* [Ionic](https://ionicframework.com/docs/angular/your-first-app/deploying-mobile)


