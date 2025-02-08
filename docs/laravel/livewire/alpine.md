# [Alpine](readme.md)

## Toggle Card

```htm
<div class="card mb-2" x-data="{ open: false }">
    <div class="card-header">
        <div class="card-title">Title</div>
        <div class="card-actions">
            <button class="btn btn-secondary" @click="open = false" x-show="open">
                Button1 </button>
            <button class="btn btn-primary" @click="open = true" x-show="!open">
                Button1
            </button>
        </div>
    </div>
    <div class="card-body" x-show="open" >

    </div>
</div>
```
