# [Blade](readme.md)

## Description

## Blade class

```htm
<span 
@class([
    'p-2', 
    'text-green-500'=> $active,
    'bg-red-500' => $inActive,
    ])>user
</span>
```

```htm
<select class="block w-full mt-1" name="status">
    <option value="published" @selected($blog->status == 'published')
        @class([
        'bg-purple-600 text-white' => $blog->status == 'published'
        ])>Published</option>
    <option value="draft" @selected($blog->status == 'draft')
        @class([
        'bg-purple-600 text-white' => $blog->status == 'draft'
        ])
        >Draft</option>
    <option value="archived" @selected($blog->status == 'archived')
        @class([
        'bg-purple-600 text-white' => $blog->status == 'archived'
        ])
        >Archived</option>
</select> 
```

## Sources

* [Laravel](https://laravel.com/docs/10.x/blade)
