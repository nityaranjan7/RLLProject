import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DatabindComponent } from './databind/databind.component';
import { EventComponent } from './event/event.component';
import { CalcComponent } from './calc/calc.component';
import { EmployshowComponent } from './employshow/employshow.component';
import { EmployDropDownComponent } from './employ-drop-down/employ-drop-down.component';
import { MenuComponent } from './menu/menu.component';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './login/login.component';

const appRoutes :Routes =
  [
    { path:'',component:LoginComponent },
    {path:'menu',component:MenuComponent,
    children:
    [
{path:'first',component:FirstComponent,outlet:'data'},
{path:'event',component:EventComponent,outlet:'data'},
{path:'databind',component:DatabindComponent,outlet:'data'},
{path:'calc',component:CalcComponent,outlet:'data'},
{path:'employshow',component:EmployshowComponent,outlet:'data'},
{path:'employ-drop-down',component:EmployDropDownComponent,outlet:'data'},
    ]
  }
  ]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DatabindComponent,
    EventComponent,
    CalcComponent,
    EmployshowComponent,
    EmployDropDownComponent,
    MenuComponent,
    LoginComponent
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
