import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { EmploysearchComponent } from './employsearch/employsearch.component';
import { FormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes :Routes=
[
  { path:'',component:MenuComponent },
  {path:'menu',component:MenuComponent,
  children:
  [
    {path:'employ',component:EmployComponent,outlet:'data'},
    {path:'user',component:UserComponent,outlet:'data'},
    {path:'search-user',component:SearchUserComponent,outlet:'data'},
    {path:'employsearch',component:EmploysearchComponent,outlet:'data'},


  ]
}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    EmploysearchComponent,
    SearchUserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
