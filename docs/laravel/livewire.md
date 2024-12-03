# [Livewire](readme.md)

## Fichiers par défaut

Nous pouvons personnaliser le contenu des fichiers créés par défaut.

```console
php artisan livewire:stubs
```

## Modal

### Include modal

Il faudra créer une vue modal puis l'importer

```php
 @include('_tabler.modal',[
    'id' => "addBilan",
    'title' => "Ajouter ce devis",
    'include' => "_tabler.form.bilan_devis_form",
    'method' => "add_bilan",
    'submit' => "add_bilan", // Optionnelle
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

## Alpine

### Toggle Card

```htm
<div class="card mb-2" x-data="{ open: false }">
    <div class="card-header">
        <div class="card-title">Title</div>
        <div class="card-actions">
            <button class="btn btn-secondary" @click="open = false" x-show="open">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <line x1="12" y1="5" x2="12" y2="19"></line> <line x1="5" y1="12" x2="19" y2="12"></line> </svg> Button1 </button>
            <button class="btn btn-primary" @click="open = true" x-show="!open">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <line x1="12" y1="5" x2="12" y2="19"></line> <line x1="5" y1="12" x2="19" y2="12"></line> </svg> Button1
            </button>
        </div>
    </div>
    <div class="card-body" x-show="open" >

    </div>
</div>
```

## Tom select

1. Importer la librairie TomSelect

   ```htm
    <link href="https://cdn.jsdelivr.net/npm/tom-select@2.2.2/dist/css/tom-select.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/tom-select@2.2.2/dist/js/tom-select.complete.min.js"></script>
   ```

2. Créer un composant livewire

    ```htm
    <div>
        <div class="input-group" >
            <select id="tag_select" wire:ignore:self placeholder="Selectinner un tag ..." autocomplete="off" wire:model.defer="list">
                <option value="">Select a person...</option>
                @foreach ($tags as $tag)
                    <option value="{{ $tag->name }}">{{ $tag->name }}</option>
                @endforeach
            </select>
            <button class="btn btn-primary" wire:click="get_list">Enregister</button>
        </div>

        <script>
            new TomSelect("#tag_select",{
                create: true,
                sortField: {
                    field: "text",
                    direction: "asc"
                },
                maxItems: 5,
                createFilter: function(input) {
                    input = input.toLowerCase();
                    return !(input in this.options);
                },
                maxOptions: 5
            });
        </script>

    </div>
    ```

    ```php
    public $tags, $list;
    public function render()
    {
        return view('livewire.select',[
            'tags' => $this->tags,
        ]);
    }

    public function get_list()
    {
        $this->emit('list',$this->list);
    }
    ```

## Javascript

```php
    public $title = '';
 
    public function save()
    {
        // ...
 
        $this->js("alert('Post saved!')"); 
    }
```

## Sources

* [Modal crud](https://www.youtube.com/watch?v=UNbacpkDqis&list=TLPQMjIwMjIwMjNwLk5OTD0dsw&index=14)
* [Tom select](https://tom-select.js.org/)
