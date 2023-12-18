import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/serviceUser/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersResponse} from "../../response/userResponse/users-response";
import {UserRequest} from "../../request/requestUser/user-request";
import {VehiculeResponse} from "../../response/vehiculeResponse/vehicule-response";
import {VehiculesService} from "../../services/serviceVehicule/vehicules.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

  iduser: number;
  user: UsersResponse;
  nom: string;
  prenom: string;
  disabled: boolean = true;
  userRequest: UserRequest;
  idUserVehicule: number[] = [];
  deleteUser = false;

  constructor(private userService: UsersService,
              private vehiculeService: VehiculesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getOneUserDetail();
    this.getAllUsersOfVehicules()
  }

  editOrSave() {
    this.disabled = !this.disabled;
    if(this.disabled) {
      this.userRequest = {
        iduser:  this.iduser,
        nom: this.nom,
        prenom: this.prenom
      }
      this.userService.editUser(this.userRequest);
    }
  }

  changeDisabled() {
    this.disabled = !this.disabled
    this.nom = this.user.nom
    this.prenom = this.user.prenom
  }

  getOneUserDetail() {
      this.route.params.subscribe(params => {
        this.iduser = params['id']
        this.userService.getOneData(this.iduser)
          .subscribe((userResponse: UsersResponse) => {
            this.user = userResponse;
            this.iduser = userResponse.iduser
            this.nom = userResponse.nom
            this.prenom = userResponse.prenom
          })
      })
  }

  getAllUsersOfVehicules() {
      this.vehiculeService.getAllData().subscribe((data: VehiculeResponse[]) => {
          data.forEach((value: VehiculeResponse) => {
              this.idUserVehicule.push(value.users.iduser)
          });
      })
  }

  deleteOneUser() {
    this.route.params.subscribe(params => {
      this.iduser = params['id']
        if(this.idUserVehicule.includes(+this.iduser)) {
          alert("Cette utilisateur possède un ou plusieurs véhicules, impossible de le supprimer.")
        } else {
          this.userService.deleteOneData(this.iduser).subscribe(() => {
            this.router.navigate(["/users"])
         })
        }
    })

  }



}
