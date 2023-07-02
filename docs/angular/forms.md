# [Angular Forms](readme.md)

## Description

1. Déclarer la variable du formualarie
2. initialiser la variable form
3. Faire appel au form builder
4. utiliser le terme initialize form
5. commenter les actions

## Register.ts

```javascript
export class TestComponent implements onInit{
    form: FormGroup

    constructor(private fb: Formbuilder){}

    ngOnInit(): void{
        this.initializeForm()
    }

    initializeForm(): void {
        console.log('initializeForm');
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
    onSubmit(): void {
        console.log('submit', this.form.value, this.form.valid);
        this.authService.subscribe(res => console.log(res);)
    }
}
```

## Register.html

```html
<form [FormGroup]="form" (ngSubmit)="onSubmit()">
    <input type="text" class="form-control" formControlName="username">
    <input type="email" class="form-control" formControlName="email">
    <input type="password" class="form-control" formControlName="password">
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## Reactive forms

### patch value

```javascript
this.competenceForm.patchValue({
    freelance_id: this.freelance.id,
    niveau: this.niveau,
})
```

## Sources

* [Monsterlessons: Angular Course 2021 - Building Real Project From Scratch ](https://www.youtube.com/watch?v=DyklxnC2XP0&t=1094s&ab_channel=MonsterlessonsAcademy)
* [Confirmation password](https://aliasger.dev/quick-notes-implement-password-and-confirm-password-validation-in-angular)