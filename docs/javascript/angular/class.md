# [Classes](readme.md)

## Conditions

```ts
[ngClass]="step == 'step1' ? 'my_class1' : 'my_class2'"
```

```ts
[ngClass]="{1 : 'my_class1', 2 : 'my_class2', 3 : 'my_class4'}[step]"
```

```ts
[ngClass]="{'my_class': step === 'step1'}"
```

```ts
[class.my_class] = "step === 'step1'"
```

## Sources

* [Stack Overflow](https://stackoverflow.com/questions/35269179/angular-conditional-class-with-ngclass)
