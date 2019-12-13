# Authentication

## Sign Up

`this.http.post<**ResponseType**>(
  url,
  {requestBody}
)`

## Authentication Guard
- create an AUthentication Guard file
- implements **CanActivate** interface
- Then add **canActivate()** method. It will return a boolean or an UrlTree, either primitive, Promise or Observable.  
- This is how it will decide if the route can be **activated**. If a guard returns a UrlTree then the current navigation will
- be cancelled and a new navigation will kick off

## Local Storage
- localStorage
- **.setItem**('[dataKeyName]', JSON.stringify([objectToStore]));
- JSON.parse(**.getItem**('[dataKeyName]'));
- **.removeItem**('[dataKeyName]');