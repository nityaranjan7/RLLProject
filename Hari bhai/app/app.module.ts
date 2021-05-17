import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DatabindComponent } from './databind/databind.component';
import { EventComponent } from './event/event.component';
import { TwoWayComponent } from './two-way/two-way.component';

import { EmployShowComponent } from './employ-show/employ-show.component';
import { EmploydropdownComponent } from './employdropdown/employdropdown.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'first',component:FirstComponent,outlet:'data'},
  {path:'second',component:SecondComponent,outlet:'data'},
  {path:'event',component:EventComponent,outlet:'data'},
  {path:'employ-show',component:EmployShowComponent,outlet:'data'},
  ]
}
]

// const appRoutes : Routes = [
//   {path:'first',component:FirstComponent},
//   {path:'second',component:SecondComponent},
//   {path:'',component:MenuComponent},
//   ]


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DatabindComponent,
    EventComponent,
    TwoWayComponent,
   
    EmployShowComponent,
        EmploydropdownComponent,
        MenuComponent,
        LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
