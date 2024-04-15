# [Dates](readme.md)

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

## Date Format

```javascript
// 👇️ const now: Date
const now = new Date();

console.log(now); // 👉️ 2023-07-31T08:40:47.891Z

console.log(now.toLocaleDateString()); // 👉️ 7/31/2023

console.log(now.toLocaleString()); // 👉️ 7/31/2023, 11:40:47 AM

console.log(now.toUTCString()); // 👉️ Mon, 31 Jul 2023 08:40:47 GMT

console.log(now.toISOString()); // 👉️ 2023-07-31T08:40:47.891Z

```

* [Source](https://bobbyhadz.com/blog/typescript-get-current-date-and-time)
* [Source](https://www.javatpoint.com/typescript-date-object)