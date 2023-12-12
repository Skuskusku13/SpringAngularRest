import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './users/users.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import {VehiculeDetailsComponent} from "./vehicules/vehicule-details/vehicule-details.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    VehiculesComponent,
    UserDetailsComponent,
    VehiculeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
