# [Guard](readme.md)

## Description

Sorte de middleware

## Créer

```console
ng g guard guards/auth
```

Il faudra choisir can activate

## configurer

Dans le fichier `guards/auth.ts`

```javascript
canActivate(): boolean {
    if(auth){
    }

    alert("Vous n'êtes pas autorisé à accéder à cette page")
    this.router.navigate['index']
        return true
}
```

Dans le fichier de routes à jouter à la fin de chaque route: 

```javascript
canActivate:['auth']
```