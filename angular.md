# Angular Cheat Sheet
___
## Binding
___
Property binding : [childProperty]="[parentProperty]"  
`@Input() [propertyName]: [type] = [defaultValue]`

Event binding : (childEvent)="[parentFunction()]"  
`@Output() [propertyName$]: EventEmitter<void> = new EventEmitter();`

### EventEmitter vs Subject
**EventEmitter** should be used when dealing with eventBinding: from child to parent via the @Output() decorator.
**Subject** should be used when passing data to any component in the app.

Two way data binding : [(ngModel)]="[propertyName]"
Needs to be declared in the TS file.
 
Binding to element :  
`@ViewChild('[elementName]', { static: true }) propertyName: ElementRef;` 

___
## HostBinding
___

Decorator that binds to an element of the DOM. Imported form @angular/core

- Binding to **class** `@HostBinding('class.[className]') propertyName: [type] = [defaultValue];`
- Binding to **style** `@HostBinding('style.[CSSPropertyName]') propertyName: [type] = [defaultValue];`  

___
## HostListener
___

Decorator that listens to event on a given host. Imported form @angular/core

- Template
`@HostListener('[host]', ['$event']) [functionName](event:[eventType]) {  }`

- Window event with key pressed:  
`@HostListener('window:keyup', ['$event']) [functionName](event:KeyboardEvent) {  }`
- Document event with click:  
`@HostListener('document:click', ['$event']) [functionName](event:Event) {  }`
- Document event with mouse:  
`@HostListener('mouseenter') [functionName](event:Event) {  }`

### ElementRef
Gives access to the element the directive sits on
Declared in the constructor and imported form @angular/core  
i.e: `this.elementRef.nativeElement`

### Renderer2
Better than ElementRef alone as it can be used when no DOM is present: ServiceWorkers, etc...
Declared in the constructor and imported form @angular/core
Template : `this.renderer.[method]([elementTarget],...)`
i.e :`this.renderer.setStyle(this.elRef.nativeElemnt)`

___
## Directives
___

### Structural directives

Removes/replace element from the DOM : *ngIf, *ngFor

### *ngFor
Renders a list from an array.

Utilities :
index : `let i = index`
first : `let first = first`
last : `let last = last`
even : `let even = even`
odd : `let odd = odd`

trackBy :
Used to improve performances of the *ngFor. It will not rerender the whole list in case of a modification but only the affected items.
Template : `trackBy: [trackByCustomFunctionName]`
TS: `public trackByCustomFunctionName(index, item){return index or item.id}`

### Attribute directives

Changes/modifies elements from the DOM : ngStyle, ngClass

___
## Services
___

Declared with the @Injectable() decorator, needed to import another service

Declared in the app.module : can be accessed by all components/services/directives
Declared in the app.component : can be accessed by all components
Declared in a component : can be accessed by the child components

**Easier way** : `@Injectable({providedIn: 'root'})` : can be accessed by all components/services/directives

___
## Routing
___

### Router Module
Registers the routes for the application

``` typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/[routeName]',
    pathMatch: 'full'
  },
  {
    path: '[routeName]',
    component: [componentName]
  },
  {
    path: '**',
    component: [componentName]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppRouting;
```
___
## Lazy Loading
___
Improves performance by only loading the requested components. The initial bundle is then lighter. Each components(could be the views) that needs to be loaded needs to have its own module and routing module.  

**In the app routing module:**

``` typescript
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./views/view-404/view-404.module').then(m => m.View404Module)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
```

In the component routing module: 
``` typescript
const [componentRoutes]: Routes = [
  {
    path: '',
    component: ViewHomeComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  imports: [RouterModule.forChild([[componentRoutes]])],
  exports: [RouterModule],
})

export class [ComponentRouting];
```

In the template :  
 - `<router-outlet></router-outlet>` will load the desired routes  
 - `routerLink="/[routeName]"` replaces the href="" and will load the requested view/component without refreshing the entire page leading to a better performance and UX
- `routerLinkActive="classToAddWhenTheLinkIsActive` will add a class to the active route

### Nested routes
When a component has some child routes
Add **children**

### Absolute path 
Will add the path to the main route(i.e: **localhost:4200** or **www.website.com** )
### Relative path
Will add the path to the current route     

### Programmatic navigation : navigating from the ts file
import { Router } from '@angular/router'
`this.route.navigate('/routeName')`

### Preloading strategy

Add this code to the appRouting Module:
``` typescript
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
```

### Route Parameters
*pathToLoad/:whateverParameterYouWant*

### Fetching Route Parameters
import ActivatedRoute
this.activatedRoute.snapshot.params['paramName]

### Reactive Route Params
Subscribe : `this.activatedRoute.params.subscribe()`

### Preserve the params
Add *queryParamsHandling* to the navigate method

___
## Forms
___

### Template Driven Approach

#### Setting up the form in the template
In the module:
`import { FormsModule } from '@angular/forms'`

In the template  
`<form>` tag:  
- `#[formName]="ngForm"` will bind the form
- `(ngSubmit)="[onSubmitFunctionName(formName)]"`

`<input>` tag: 
- `ngModel` will bind the form-control to the form object
- `name="[formControlName]"` act as a selector

#### Grouping controls 
Use *ngModelGroup="[formControlGroupName]" #formControlGroupName="ngModelGroup"* in a surrounding div around the form-control you want to group

Only one button should be of type **submit** as it will be the button that the form is listening to for the ngSubmit method. All other buttons should be of type **button**

#### Accessing the form in the ts file
`onSubmitFunctionName(form: NgForm){}`
**or**
use `@ViewChild('formName') formNameProperty: NgForm` to access the form before submitting it

#### Validators
Add *required, email, password...* directly to the form-control tag  
**ngNativeValidate** will enable HTML5 validation as Angular disables it by default

#### Resetting the form
`this.[formName].reset()`  
**or**  
`this.[formName].setValue([customValues])` to reset the form with specific values

### Reactive Approach
In the module: `import {ReactiveFormControl}`

In the ts file:  
`import { FormGroup } from '@angular/forms'`  
create the form : `[formName]: FormGroup` and initialize the form in the OnInit interface :  
``` typescript
this.[formName] = new FormGroup(
  '[controlName]' = new FormControl('[defaultValue]', [Validators.required, Validators.email, ...]),
)
```

In the template:  
`<form>` tag:  
- `[formGroup]="[formName]"`
- `(ngSubmit)="[onSubmitFunctionName()]"`

`<input>` tag:  
- `formControl="[controlName]"`

#### Nested controls - FormGroup
Add a new **FormGroup** to the existing FormGroup:  
``` typescript
this.[formName] = new FormGroup({
  '[formGroupControlName]' = new FormGroup({  
    '[controlName]' = new FormControl('[defaultValue]', [Validators.required, Validators.email, ...]),
  }),
})
```

In the template`, wrap the controls in a new div with the FormGroupName directive:  
`formGroupName="[formGroupControlName]"`


#### Form Array
In the template: 
`*ngFor= let control of getControlsArray(); let i = index`  

in the ts file:  
'[arrayControlName]' = new FormArray([])
```
  getControlsArray(){
    return (<FormArray>this.[formName].get('[arrayControlName]')).controls
  }
```

=> alternative use, **Getter**:  
In the template:  
`*ngFor= let control of controlsArray; let i = index`  

In the ts file:  
```
  get controlsArray(){
    return (this.[formName].get('[arrayControlName]') as FormArray).controls
  }
```

#### setValue() and patchValue()
`this.[formName].setValue()`
`this.[formName].patchValue()`

#### Custom Validators
...

#### Value and Status changes - hooks observables
`this.[formName].valueChanges.subscribe(value => console.log(value))`  
`this.[formName].statusChanges.subscribe(status => console.log(status))`

___
## Pipes
___
...

___
## HTTP request
___
...
___
## Authentication
___
### Sign Up

``` typescript
this.http.post<**ResponseType**>(  
  url,  
  {requestBody}  
)
```

### Authentication Guard
- create an Authentication Guard file
- implements **CanActivate** interface
- Then add **canActivate()** method. It will return a boolean or an UrlTree, either primitive, Promise or Observable.  
- This is how it will decide if the route can be **activated**. If a guard returns a UrlTree then the current navigation will be cancelled and a new navigation will kick off
  
### canActivate 
It will prevent the user from reaching the page but will **still load** the module
### canload
Will prevent the user from reaching the page but will **not load** the module. *Better in case of lazy loading*

___
## Local Storage
___

- localStorage
- **.setItem**('[dataKeyName]', JSON.stringify([objectToStore]));
- JSON.parse(**.getItem**('[dataKeyName]'));
- **.removeItem**('[dataKeyName]');

___
## AOT vs JIT
___
___
## SSR
___

- ng add @nguniversal/express-engine

___
## PWA - Service Workers
___

- ng add @angular/pwa
Installs the following files:
- manifest.json : loads the icons that will be displayed on the home screen
- ngsw-config.json : **not sure** configures the service worker.
- Adds serviceWorker module to the app module : it acts like a **proxy**, it catches the outgoing request and treats them.... **to complete**

The **service worker** will cache certain resources that will contain a *hash*. Then all new prod build will update the service worker and update the resources

Add this property to the ngsw-config.json file:
``` json
"dataGroups": [
  {
    "name": "[**name**]",
    "urls": [**urls that will fetch data**],
    "cacheConfig": {
      "maxSize": 5,
      "maxAge": "6h",
      "timeout": "10s",
      "strategy": "freshness" // or performance
    }
  }
]
```