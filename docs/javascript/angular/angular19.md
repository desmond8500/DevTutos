# [Angular 19](readme.md)

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