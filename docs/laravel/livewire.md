# [Livewire](readme.md)

## Fichiers par défaut

Nous pouvons personnaliser le contenu des fichiers créés par défaut.

```console
php artisan livewire:stubs
```

## Modal

### Include modal

Il fudra créer une vue modal pui sl'importer

```php
 @include('_tabler.modal',[
    'id' => "addBilan",
    'title' => "Ajouter ce devis",
    'include' => "_tabler.form.bilan_devis_form",
    'method' => "add_bilan",
    'submit' => "add_bilan", // Optionelle
])
```

Fichier blade

```htm
<div class="modal modal-blur fade" id="{{ $id }}" tabindex="-1" role="dialog" aria-hidden="true" wire:ignore.self>
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <form wire:submit.prevent="{{ $method }}">
                <div class="modal-header">
                    <h5 class="modal-title">{{ $title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        @include($include)
                    </div>
                </div>
                <div class="modal-footer">
                    <a type="button" class="btn btn-secondary me-auto" data-bs-dismiss="modal">Fermer</a>
                    <button type="submit" class="btn btn-primary" >{{ $submit ?? "Ajouter" }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
```

### Component modal

```console
php artisan make:component modal
```

```htm
@component('components.modal', ['id'=>'exampleModal', 'method'=>'testme','title'=>'hello'])
    fre {{ $test }}
@endcomponent
<script> window.addEventListener('close-modal', event => { $("#exampleModal").modal('hide'); }) </script>
```

```htm
 <div class="modal modal-blur fade" id="{{ $id }}" tabindex="-1" role="dialog" aria-hidden="true" wire:ignore.self>
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <form wire:submit.prevent="{{ $method }}">
                <div class="modal-header">
                    <h5 class="modal-title">{{ $title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        {{ $slot }}
                    </div>
                </div>
                <div class="modal-footer">
                    <a type="button" class="btn btn-secondary me-auto" data-bs-dismiss="modal">Fermer</a>
                    <button type="submit" class="btn btn-primary">{{ $submit ?? "Ajouter" }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
```

## Sources

* [Modal crud](https://www.youtube.com/watch?v=UNbacpkDqis&list=TLPQMjIwMjIwMjNwLk5OTD0dsw&index=14)
