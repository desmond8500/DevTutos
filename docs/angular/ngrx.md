# [NgRX](readme.md)

## Description

NgRx is a framework for building reactive applications in Angular. NgRx provides libraries for:

* Managing global and local state.
* Isolation of side effects to promote a cleaner component architecture.
* Entity collection management.
* Integration with the Angular Router.
* Developer tooling that enhances developer experience when building many different types of applications.

NgRx packages are divided into a few main categories

* State

  * Store - RxJS powered global state management for Angular apps, inspired by Redux.
  * Effects - Side effect model for @ngrx/store.
  * Router Store - Bindings to connect the Angular Router to @ngrx/store.
  * Entity - Entity State adapter for managing record collections.
  * ComponentStore - Standalone library for managing local/component state.

* Data

  * Data - Extension for simplified entity data management.

* View

  * Component - Extension for fully reactive Angular applications.

* Developer Tooling

  * Store Devtools - Instrumentation for @ngrx/store that enables visual tracking of state and time-travel debugging.
  * Schematics - Scaffolding library for Angular applications using NgRx libraries.

## Installation d'NgRX

**Installer NgRX :**

```console
npm install @ngrx/store --save
```

**Ajouter NgRX à un projet :**

```console
ng add @ngrx/store@latest
ng add @ngrx/store@latest --minimal false
```

La seconde commande permet de faire la configuration du store directement dans `app.module.ts`



## Sources

* [Site officiel NgRX](https://ngrx.io/guide/store/install)