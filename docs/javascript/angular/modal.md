# [Modal](readme.md)

## Ouvir un modal à partir d'une methode

```ts
@ViewChild('myModal') myModal : any;

openModal() {
    this.modalService.open(this.myModal);
}
```
