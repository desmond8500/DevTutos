# [Générer Apk](readme.md)

## Resumé

```bash
ionic build --prod
mv www/browser/* www/
npx cap sync
./gradlew assembleDebug
```

## Commandes

1. Construire le projet :

    ```bash
    ionic build --prod
    ```

    Si les fichiers sont créés dans le dossier *www/browser* il faut copier le contenu dans le dossier *www*

2. Ajouter capacitor

    ```bash
    npm install @capacitor/android
    ```

3. Ajouter le dossier android

    ```bash
    npx cap add android
    ```

4. Dans le dossier android il faut créer le fichier et y ajouter le chemin du sdk

    ```bash
    touch android/local.properties
    ```

5. Synchroniser le dossier android

    ```bash
    npx cap sync
    ```

    ```bash
    sdk.dir=C:/Users/Zacharias/AppData/Local/Android/Sdk

    sdk.dir=C:\\Users\\Zacharias\\AppData\\Local\\Android\\Sdk
    ```

6. Construire l'apk de debug

    ```bash
    cd android
    ./gradlew assembleDebug
    ```

7. Construire l'apk de release

    ```bash
    ./gradlew assembleRelease
    ```

## Rebuild

1. Construire le projet

    ```bash
    ionic build --prod
    ```

2. Déplacer le contenu du dossier www

   ```bash
   cp www/browser/* www/ -r
   ```

3. Mettre à jour le dossier android

    ```bash
    npx cap sync
    ```

4. Entrer dans le dossier _android_ 

    ```bash
    cd android
    ```

5. Générer l'APK debug

    ```bash
    ./gradlew assembleDebug
    ```
