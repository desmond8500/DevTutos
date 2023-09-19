# [Modèle de page TS](readme.md)

## Description

```javascript
    class Model{
    // Variables
    name: any

    constructor() { }

    ngOnInit() {
    }

// Fonctionalité -----------------------------------------

    variable_methode: any

    form = FormGroup = this.fb.group({
        password: [null, [Validators.minLength(12)]],
        confirmpassword: [null, [ Validators.minLength(12)]],
    })

    methode1(){

    }
}
```