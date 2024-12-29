# [Générer Apk](readme.md)

## Commandes

Construire le projet :

```bash
ionic build --prod
```

Ajouter capacitor

```bash
npm install @capacitor/android
```

Ajouter le dossier android

```bash
npx cap add android
```

Dans le dossier android il faut créer le fichier et y ajouter le chemin du sdk

```bash
touch android/local.properties
```

Synchroniser le dossier android

```bash
npx cap sync
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
