# [Json Server](../javascript)

## Description

### Installation

```cosole
npm install json-server
```

### Utilisation

Créer un fichier `db.json`

```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

Lancer le serveur

```console
npm json-server db.json --watch
```

## Sources

* [NPM](https://www.npmjs.com/package/json-server)