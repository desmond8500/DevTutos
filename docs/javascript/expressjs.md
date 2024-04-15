# [Express JS](../javascript/)

## Instalation

```console
npm init
npm install express --save
```

## Hello world

Créer un fichier `index.js`

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Lancer le serveur

```console
node index.js
```

## Rendre des fichiers statiques disponibles

Ajouter au code :

```javascript
app.use(express.static('public'))
```

Le contenu du dossier devient accessible ex: `http://localhost:3000/test.md`

## Rendre une page web disponible

Il faut que le fichier soit au préalable disponible

```javascript
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
```

## Déploiement sur AlwaysData

Configuration:  

**Type :** NodeJS  
**Commande :** node ~/www/projets/cdn-v2/index.js  
**Répertoire de travail :** /home/smi/www/projets/cdn-v2  

```javascript
const express = require('express')
const app = express()
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.use(express.static('public'))

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port`)
})
```

## Variable d'environnement

```console
npm install dotenv
```

```javascript
if (dotenv.parsed) {
  const port = 3000
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
} else {
  app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port`)
  })
}
```

## Sources

* []()