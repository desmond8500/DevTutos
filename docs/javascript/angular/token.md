# [Token](readme.md)

## Description

```javascript
postAvatar(form: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this._http.post(this.server + '/post_avatar', form, { headers: headers })
  }

``` 

## Sources

* []()