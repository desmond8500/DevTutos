# [Laravel Trait](readme.md)

## Description

Les traits sont un moyen pratique de réutiliser du code.

Vous pouvez créer un dossier `App\Traits`

```php
namespace App\Traits;
trait ArticlePostTrait {
    
    public function share($article) {

    return 'share the article';
    }
}
```

```php
class ShareArticle {
    use ArticlePostTrait;

    $reviewArticle = new ReviewArticle;
    echo $reviewArticle->share(''); // 'share this post' 

    $shareArticle = new ShareArticle;
    echo $shareArticle->share(''); // 'share this 
}
```

## Sources

* []()