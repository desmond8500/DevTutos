# [Template](readme.md)

## Description

## Ngtemplates

```html
    <ng-template #itemTemplate let-item>
        <span>{{ item.name }}</span>
        <p>{{ item.description }}</p>
        <button (click)="onClick(item)">Click Me</button>
    </ng-template>
    
    <ng-container [ngTemplateOutlet]="itemTemplate"> </ng-container>
```

## Sources

* [Use template](https://dev.to/frederikprijck/reusable-html-in-angular-using-ngtemplateoutlet-3l8p)
