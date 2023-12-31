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
import {FormsModule} from "@angular/forms";
import { CardHomeComponent } from './sharedComponent/card-home/card-home.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    VehiculesComponent,
    UserDetailsComponent,
    VehiculeDetailsComponent,
    CardHomeComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
