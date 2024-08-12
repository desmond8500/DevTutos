# [PrimeNG](readme.md)

## Description
 
## Installation

```console
npm install primeng
```

dans le fichier `angular.json`

```json
"styles": [
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    ...
]
```

Dans le fichier `app.config.ts`

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

* [PrimeNG](https://primeng.org/installation)