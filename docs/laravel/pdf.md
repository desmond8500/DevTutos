# [Laravel PDF](readme.md)

## Description

## Installation

```console
composer require barryvdh/laravel-dompdf
```

## Utilisation

Dans dans le fichier web :

```php
public function pdf(){
    $carbon = new Carbon();

    $data = [ ];

    $pdf = Pdf::loadView('_pdf.pdf', $data);
    return $pdf->stream('pdf');
    // return $pdf->download('sdfsd');
}
```

## Saut de page

```htm
<style>
    .page-break {
        page-break-after: always;
    }
</style>
<h1>Page 1</h1>
    <div class="page-break"></div>
<h1>Page 2</h1>
```

## Orientation de la page

```php
$pdf = Pdf::loadView('_pdf.pdf', $data)->setPaper(array(0,0,246,492), 'landscape');
return $pdf->stream('pdf');
```

## Téléchargement du fichier

```php
$pdf = Pdf::loadView('_pdf.pdf', $data)->setPaper(array(0,0,246,492), 'landscape');
return $pdf->download('Fichier.pdf');
```

## Sauvegarder le fichier

```php
$pdf = Pdf::loadView('_pdf.pdf', $data)->setPaper(array(0,0,184.21,368.5), 'landscape')->save('chemin/Fichier.pdf');
```

## Utile

1 inch = 72 point  
1 inch = 2.54 cm

## Sources

* [Laravel DomPDF](https://github.com/barryvdh/laravel-dompdf)