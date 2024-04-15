# [Vuepress](readme.md)

## Installation

```console
npm install -D vuepress@next
```

## Lancer le server

Pour lancer le serveur :

```console
npm run dev:docs
```

Compiler le projet

```console
npm run docs:build
```

::: details
This is a details block, which does not work in IE / Edge
:::

## Afficher un message

```html
Hello, {{ msg }}

<script setup>
    const msg = 'Vue in Markdown'
</script>
```

## Click Button

```html
{{ count }}
<button @click="count++">Click Me!</button>
<script setup>
    import { h, ref } from 'vue'
    const count = ref(0)
</script>
```

## Sources

*[Vuepress](https://vuepress.vuejs.org/)