# [Angular 19](readme.md)

## Version

```bash
ng --version
```

## Upgrade

Mise à jour à partir de la version 18

```bash
ng update @angular/core@19 @angular/cli@19
```

## Importer un compsant

```htm
<app-header></app-header>
```

```javascript
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  imports: [HeaderComponent],
})
```