# [Angular 17](readme.md)

## Description

## Httpclient

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

## Sources

* []()