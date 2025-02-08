# [Tom Select](readme.md)

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
