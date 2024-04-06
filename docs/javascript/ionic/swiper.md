# [Swiper JS](readme.md)

## Description

Librairie qui permet de faire des carousels

## Installation

```console
npm install swiper@latest
```

Dans le module de base :

```javascript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [..., CUSTOM_ELEMENTS_SCHEMA]
});
...
```

Dans le composant de base comme `app.component.js`

```javascript
import { register } from 'swiper/element/bundle';

register();

@Component({
  ...
})
...
```

Il faudra ensuite relancer le server.

## Utilisation

```htm
<swiper-container
    [loop]="true"
>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

## Options

```htm
<ion-slides [options]="{ slidesPerView: 3, loop: true }">
  <ion-slide>Slide 1</ion-slide>
  <ion-slide>Slide 3</ion-slide>
  <ion-slide>Slide 3</ion-slide>
</ion-slides>
```

```htm
<swiper-container [slidesPerView]="3" [loop]="true">
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>
```

```htm
<swiper-container effect="flip">
  ...
</swiper-container>
```

## Sources

* [Ionic Docs - Ion-slides](https://ionicframework.com/docs/angular/slides)
* [Swiper docs](https://swiperjs.com/swiper-api)
