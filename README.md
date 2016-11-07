## NgTwo Retina


Add support for Retina displays for Angular 2 (Final). 


### Usage

Include the src/directives/ngTwo-retina/ngTwo-retina.directive.ts in your project.

Import the Directive in your app.module.ts: <br>
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NgTwoRetina } from './directives/ngTwo-retina/ngTwo-retina.directive'

@NgModule({
  declarations: [
    AppComponent,
    NgTwoRetina
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Use the Directive in your template:
```
<img retina-image [src]="'../assets/images/nemo.jpg'" alt="">
```

Don't forget to set fixed height and width for img:
```
img {
  width: 300px;
  height: 200px;
}
```

### Demo

Install the Angular CLI (https://cli.angular.io/)
```
npm install -g angular-cli 
```

Install dependencies
```
npm install
```

Start application 
```
ng serve
```
