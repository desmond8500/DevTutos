# [Ressource API](readme.md)

## Description

 

## Utilisation

```javascript
user = resource({
    loader: () => fetch('/api/v1/user/').then(response => response.json() )
})
```

Pour récupérer la valeur

```javascript
user.value()
```

```html
<div>{{ user.value()?.id }}</div> 
```

pour relancer la requette

```javascript
user.reload()
```

## Update

```javascript
this.user.value.set({
    id: 1,
    name: 'ret'
})
```
