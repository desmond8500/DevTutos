# [Module de recherche](readme.md)

## Description

Faire une barre de recherche avec le filtrage

## Code

Créer le composant

```console
ng g c searchCard
```

```htm
<div class="input-group">
  <input
    id="typeahead-basic"
    type="text"
    class="form-control"
    placeholder="Chercher en fonction des métiers"
    (keyup.enter)="searchByJob()"
    [inputFormatter]="formatter"
    [resultFormatter]="formatter"
    [(ngModel)]="model"
    [ngbTypeahead]="search2"
    />

  <button class="btn btn-primary btn-icon" (click)="searchByJob()">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <circle cx="10" cy="10" r="7"></circle> <line x1="21" y1="21" x2="15" y2="15"></line> </svg>
  </button>
</div>
```

```javascript
search(){
    if (!this.searchForm.value.search) {
      this.getAnnonces()
    }
    else{
      let list: any = []
      this.annonce$.filter((item: any)=> {
        if (item.user.prenom.toLocaleLowerCase().includes(this.searchForm.value.search) ) {
          list.push(item)
        }
      })
      this.annonce$ = list
    }
  }
```