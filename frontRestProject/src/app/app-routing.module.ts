import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {VehiculesComponent} from "./vehicules/vehicules.component";
import {UserDetailsComponent} from "./users/user-details/user-details.component";
import {VehiculeDetailsComponent} from "./vehicules/vehicule-details/vehicule-details.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "users/:id",
    component: UserDetailsComponent
  },
  {
    path: "vehicules",
    component: VehiculesComponent
  },
  {
    path: "vehicules/:id",
    component: VehiculeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
