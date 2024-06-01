# [Angular 17](readme.md)

## Installation

```console
ng new my-app
```

## Configurations

### Routerlink

Importer le Routermodule pour chaque routerlink

### Httpclient

Ajouter le _provideHttpClient_ dans le fichier `app.configs.ts`

```javascript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient()],
};
```

## Themes

[Tabler](../tabler.md)
[PrimeNG](../primeNG.md)

## If condition

```javascript
@if (loggedIn) {
  The user is logged in
} @else {
  The user is not logged in
}
```

## Loop

```javascript
@for (user of users; track user.id) {
  {{ user.name }}
} @empty {
  Empty list of users
}
```

## Inject

A utliser à la place du constructeur dans les composants standalone

```javascript
export class AppComponent{
  route = inject(Router)
}
```

## Intercetor

Il s'agit d'ajouter un token dans les requettes effectuées vers le backend

il faudra créer un fichier `auth.intervceptor.ts`

```javascript
export const authInterceptor {
  const token = localStorage.getItem('user_token') ?? ''
  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    }
  })
  return next(request)
}
```

Dans le fichier `appConfig.ts` il faudra ajouter le fichier dans le provider

```javascript
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient([authInterceptor])],
};
```

## Sources

* [Blog](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)
* [Auth](https://www.youtube.com/watch?v=R8a8ituFkls)