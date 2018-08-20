import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './modules/app-routing/app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { UserDetailComponent }  from './components/user-detail/user-detail.component';
import { UsersComponent }      from './components/users/users.component';
import { UserSearchComponent }  from './components/user-search/user-search.component';
import { MessagesComponent }    from './components/messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,    
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailComponent,
    MessagesComponent,
    UserSearchComponent,
    UserDetailComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }