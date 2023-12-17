import {Component, OnInit} from '@angular/core';
import {VehiculeResponse} from "../../response/vehiculeResponse/vehicule-response";
import {ActivatedRoute, Router} from "@angular/router";
import {VehiculesService} from "../../services/serviceVehicule/vehicules.service";
import {UsersService} from "../../services/serviceUser/users.service";
import {UsersResponse} from "../../response/userResponse/users-response";
import {VehiculeRequest} from "../../request/requestVehicule/vehicule-request";

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.scss']
})
export class VehiculeDetailsComponent implements OnInit{

  disabled: boolean = true;
  vehiculId: any;
  vehicule: VehiculeResponse;
  users: UsersResponse[] = [];
  oneUser: UsersResponse;
  iduserSelected: string;
  vehiculeRequest: VehiculeRequest;

  idvehicule: number;
  marque: string = "";
  immat: string = "";
  miseCirculation: string = "";
  dateSortie: string = "";
  iduser: number;

  nomUser: string = "";
  prenomUser: string = "";

  constructor(private route: ActivatedRoute,
              private vehiculeService: VehiculesService,
              private userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
   this.getOneVehiculeDetails()
    this.getAllUsers();
  }

  getOneVehiculeDetails() {
    this.route.params.subscribe(params => {
      this.vehiculId = params['id'];
      this.vehiculeService.getOneData(this.vehiculId)
          .subscribe((vehiculeResponse: VehiculeResponse) => {
            this.vehicule = vehiculeResponse;
            this.idvehicule = vehiculeResponse.idvehicule;
            this.marque = vehiculeResponse.marque;
            this.immat = vehiculeResponse.immat;
            this.miseCirculation = vehiculeResponse.miseCirculation;
            this.dateSortie = vehiculeResponse.dateSortie;
            this.iduser = vehiculeResponse.users.iduser;
            this.nomUser = vehiculeResponse.users.nom
            this.prenomUser = vehiculeResponse.users.prenom
            this.iduserSelected = this.iduser + "";
            console.log("iduser ", this.iduserSelected)
          })
    })
  }

  deleteOneVehicule() {
    this.route.params.subscribe(params => {
      this.vehiculId = params['id'];
      this.vehiculeService.deleteOneVehicule(this.vehiculId)
          .subscribe(() => {
            this.router.navigate(["/vehicules"])
          })
    })
  }

  getAllUsers() {
    this.userService.getAllData()
      .subscribe((userResponse: UsersResponse[]) => {
        this.users = userResponse;
      });
  }

  editOrSave() {
    this.disabled = !this.disabled;
    if(this.disabled) {
      this.vehiculeRequest = {
        idvehicule: this.idvehicule,
        marque: this.marque,
        immat: this.immat,
        miseCirculation: this.miseCirculation,
        dateSortie: this.dateSortie,
        iduser: this.iduser,
      }
        console.log(this.iduser, parseInt(this.iduserSelected))
        console.table(this.vehiculeRequest)
      this.vehiculeService.editOneVehicule(this.vehiculeRequest);
    }
  }

  changeDisabled() {
    this.disabled = !this.disabled
    this.idvehicule = this.vehicule.idvehicule;
    this.marque = this.vehicule.marque;
    this.immat = this.vehicule.immat;
    this.miseCirculation = this.vehicule.miseCirculation;
    this.dateSortie = this.vehicule.dateSortie;
    this.iduser = this.vehicule.users.iduser;
  }


  userSelected() {
    // // régler le problème de la liste qui affiche pas le nom du champs select
    const onlyDigits = this.iduserSelected.match(/\d+/);
    console.log("userSelect", parseInt(this.iduserSelected))
      if (onlyDigits){
        this.iduserSelected = onlyDigits?.join("");
        this.iduser = parseInt(this.iduserSelected)
        return true;
      }
      return false;
  }

}
