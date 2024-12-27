# [Générer Apk](readme.md)

## Commandes

Construire le projet :

```bash
ionic build --prod
```

Ajouter le dossier android

```bash
npx cap add android
npx cap sync
```

Dans le dossier android il faut créer le fichier et y ajouter le chemin du sdk

```bash
mkdir local.properties
```

```bash
sdk.dir=C:/Users/Zacharias/AppData/Local/Android/Sdk

sdk.dir=C:\\Users\\Zacharias\\AppData\\Local\\Android\\Sdk
```

Construire l'apk de debug

```bash
cd android
./gradlew assembleDebug

```

Construire l'apk de release

```bash
./gradlew assembleRelease
```
