import { NgModule } from '@angular/core';//for using the ng based methods like *ngFor, *ngIf, ngOnInit and the likes.
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';// <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [//every component that uses the imported stuff should be included in the declarations property, in other terms this is where we specify which components are part of the module
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],//all components that use imports must be included in the declarations.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule//to specify which Modules we are importing into our Module(into our cohesive block of code)
  ],//all imports must be included in here
  providers: [],//the services that are available for injection
  bootstrap: [AppComponent]//this is to specify the component that angular will bootstrap when the application is started
})
export class AppModule { }
