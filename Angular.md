Binding																									
Property binding	[ChildPropertyName]="parentPropertyName"																								
Two way data binding	[(ngModel)]="twoWayDataBinding"																								
Event binding	(event)="eventBinding"																								
Directives																									
Structural directives	"Removes/replace element from the DOM :
*ngIf, *ngFor"																								
Attribute directives	"Changes/modifies elements from the DOM : 
ngStyle, ngClass"																								
@HostListener	"Best way to build a directive and listen to event
using Renderer2 and ElementRef"																								
@HostBinding	"Replaces the use of Renderer2
"						"REACTIVE PROGRAMMING:
ASYNCHRONOUS PROGRAMMING ???
SUBSCRIBING TO AN EVENT AND NOT WAITING FOR IT HAPPEN..."																		
																									
Services																									
Declared in the app.module : 	can be accessed by all components/services/directives																								
Declared in the app.component : 	can be accessed by all components but not the services																								
Declared in a component : 	can be accessed by all child components only																								
Needs the @Injectable() decorator	"Can import another service
"																								
"Inside the @Injectable({
    providedIn: root'
})"	Allows Angular to lazily load services																								
Passing data from Child > Parent	"EventEmitter
"																								
Passing data accross components	new Subject																								
ES6																									
Spread operator	turn an array of elements into a list of elements																								
																									
																									
Routing																									
RouterModule	"Register the routes for the main application
"																								
Routes	"Type of routes: path: string, componenent: Component
"																								
router-outlet	Directive that will load the desired component																								
router-link	"replaces the href and allows us to navigate to another 
page/view without refreshing/reloading the entire app
=> better user experience"																								
"absolute path
"	"Will add the path to the main route (i.e : localhost:4200)
/pathToLoad"																								
relative path	"Will append the path to the current URL
./pathToLoad
pathToLoad"																								
active router link	routerLinkActive="classToAddWhenTheLinkIsActive"																								
"
"	"routerLinkActiveOptions=""{exact: true}"" : allows the 
class to be added only if the path is exactly equal to 
the desired route
"																								
Navigate from ts file	"Called ""programmatic Navigation""
import Router, then use the navigate method from 
Router.
i.e: this.router.navigate(['/componentToLoad'])
if using a relative route use: 
{relativeTo: this.activatedRoute}
"																								
"Route parameter
"	"pathToLoad/:whateverParameterYouWant
"																								
"Fetching route param
"	"import ActivatedRoute
this.activatedRoute.snapshop.params['paramName']"																								
Route param reactively	"Will fire when the URL changes from the same 
component. We can subscribe to that change 
to make sure we get the changes when they
occur
this.activatedRoute.params.subscribe()"																								
"Nested route
"	"Use the property children: [] and add the children 
routes.
Then add <router-outlet> tag to the html
"																								
"Preserve the params
"	"Add queryParamsHandling: 'preserve' to the navigate 
method
 "																								
																									
Form																									
ngForm	The type of the form in the Template Driven Approach																								
ngModel on form-control	"Gets the form-control values
"																								
submit method 	needs to be on the form element																								
use #elementReference	"#form on the form element to get the form's values 
on submit"																								
button 	"the submit button must be of type ""submit""
All other buttons must have the type ""button"" 
so that they don't submit the form"																								
setValue()	overrides all the from-controls values																								
patchValue()	only overrides the given form-controls																								
Template Driven Approach	"ngForm/FormModule:
import from angular/forms "																								
"Reactive approach 
"	"FormGroup/ReactiveFormModule import from 
angular/forms 
FormGroup, FormControlName in the template"																								
HTTP																									
"set up: 
"	"import the HttpClientModule in the appModule
import the HttpClient in the component/service making 
the request"																								
"post
"	"this.http.post()
- api endpoint: url
- request body: data sent"	 																							
																								