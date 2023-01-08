# Dates

## Installation

Dans le fichier ```app.module.ts```

```javascript
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ]
```

## Utiliation dans un formulaire

```javascript
    this.reportForm.patchValue({
      objet: this.report?.objet,
      date: formatDate(this.report?.date, 'yyyy-MM-dd', 'fr'),
      description: this.report?.description,
    })
```

## Pipes
