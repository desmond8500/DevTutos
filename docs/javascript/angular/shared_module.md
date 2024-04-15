# [Shared Module](readme.md)

## Description

IL est important de créer un module partagé afin de pouvoir utiliser un module entre plusieurs composants.

```console
ng g module shared
```

Les composants à réutiliser doivent être déclarés dans ce module puis exportés pour être utilisés dans d'autres modules. Il faut pour cela que le `shared_module` soit importé dans les modules en question.

```javascript
@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LogoComponent
  ]
})
```
<!-- 
## Sources

* []() -->