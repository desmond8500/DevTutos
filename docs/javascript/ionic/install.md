# [Installation](readme.md)

## Prérequis

* [NodeJS](https://nodejs.org/en)

```console
npm install -g @ionic/cli
ionic start
ionic serve ou ionic serve -l
```

## Déployer sur Netlify

Il faut se connecter avec son compte github, gitlab ou bitbucket afin d'importer un répo.  
Il faudra ensuite renseigner les points suivants :  

* __Base Directory__ : /
* __Build command__ : ng build
* __Publish Directory__ : /www
* __Build status__ : Active

## Sources

* [Ionic](https://ionicframework.com/docs/intro/cli)
