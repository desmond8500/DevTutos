# [PrimeNG](readme.md)

## Description

C'est une librairie de composants pour angular

## Installation

```console
npm install primeng
```

Dans le fichier `style.css`

```css
@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeng/resources/primeng.css";
```

Sil y a un bug de fonctionnement de certains éléments comme les sélects il faudra ajouter dans le fichier `app.config.ts`

```javascript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()],
};
```

Pour primeflex

```console
npm install primeflex
```

```css
@import "primeflex/primeflex.css";
```

## Sources

* [PrimeNG](https://primeng.org/installation)
* [PrimeFlex](https://primeflex.org/installation)