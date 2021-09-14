import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

//ngprime components
import {TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { IndividualUserComponent } from './users/individual-user/individual-user.component';
import { AllUsersComponent } from './users/all-users/all-users.component';


@NgModule({
  declarations: [
    AppComponent,
    IndividualUserComponent,
    AllUsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
