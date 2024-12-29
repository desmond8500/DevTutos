# [Configuration](readme.md)

## Configuration glocbale en mode IOS

Dans le fichier *app.module.ts*

```javascript
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios' // Forcer le mode iOS
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

C'est possible de le faire dans le fichier *global.css*

```css
:root {
  --ionic-mode: ios;
}
```