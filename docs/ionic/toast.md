# [Toast](readme.md)

## Description

Sorte de notification

## Toast coté typescript

```javascript
async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ce freelance a été ajouté aux favoris',
      duration: 1500,
      position: 'middle',
    });
    // Affiche le toast
    await toast.present();

    // S'execute à la femeture du toast
    toast.onDidDismiss().then((val:any)=>{
      console.log('toast dismissed')

    })

}
```

## Sources

* [Javatpoint](https://www.javatpoint.com/ionic-toast)
