# [Navigation](readme.md)

## Navigation entre deux pages

Page 1

```html
<button (click)="consulter(id)">Page suivante</button>
```

```ts
constructor(
    private route: Router, 
    private service: ServiceService
) { }

consulter(id){
    this.service.setId(id);
}
```

Service

```ts
constructor(
    private route: Router, 
    private http: HttpClient
) { }

setIdd(id){
    this.userId = id;
    this.router.navigate(['/userinfo']);
}

getuser(){
    return this.http.get(this.server + 'api/getuser/' + this.userId);
}
```

## Route active

Pour affichier la route active il faudra utiliser l'attribut  ``routerLinkActive`` puis la classe à activer:

```html
<a routerLinkActive="active"/>
```

## Navigation et paramètres

```javascript
constructor(
private active_route: ActivatedRoute,
) {}

ngOnInit(): void {
this.userid = this.active_route.snapshot.paramMap.get('id');
}

```
