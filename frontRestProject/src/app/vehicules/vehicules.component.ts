import {Component, OnInit} from '@angular/core';
import {VehiculesService} from "../services/serviceVehicule/vehicules.service";
import {VehiculeResponse} from "../response/vehiculeResponse/vehicule-response";
import {Router} from "@angular/router";
import {VehiculeRequest} from "../request/requestVehicule/vehicule-request";
import {UsersService} from "../services/serviceUser/users.service";
import {UsersResponse} from "../response/userResponse/users-response";

@Component({
    selector: 'app-vehicules',
    templateUrl: './vehicules.component.html',
    styleUrls: ['./vehicules.component.scss']
})
export class VehiculesComponent implements OnInit {

    vehicules: VehiculeResponse[] = [];
    marque: string = "";
    immat: string = "";
    miseCirculation: string = "";
    dateSortie: string = "";
    valueButton: string = "";
    iduserSelected: string = "";
    request: VehiculeRequest;
    addOrOk: boolean = false;
    cancelBool: boolean = false;
    emptyValue: boolean = false;
    users: UsersResponse[] = []

    constructor(private vehiculesService: VehiculesService,
                private userService: UsersService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getAllVehicules()
        this.getAllUsers();
        this.valueButton = "Ajouter"
    }

    getAllVehicules() {
        this.vehiculesService.getAllData()
            .subscribe((vehiculeResponse: VehiculeResponse[]) => {
                this.vehicules = vehiculeResponse;
            });
    }

    getAllUsers() {
        this.userService.getAllData()
            .subscribe((userResponse: UsersResponse[]) => {
                this.users = userResponse;
            });
    }

    vehiculeDetails(id: any) {
        return this.router.navigate(["/vehicules/", id]);
    }

    userSelected() {
        // // régler le problème de la liste qui affiche pas le nom du champs select
        console.log(parseInt(this.iduserSelected))
        if(!parseInt(this.iduserSelected.split("").at(0) + "")) {
            return false;
        } else {
            this.iduserSelected = this.iduserSelected.split("").at(0) + "";
            return true;
        }
    }

    addVehicule() {
        this.valueButton = "Sauvegarder";
        this.addOrOk = true;
        if (this.valueButton === "Sauvegarder") {
            this.cancelBool = true;
            if (this.marque.trim() && this.immat.trim() && this.dateSortie.trim()) {
                this.emptyValue = false
                this.vehiculesService.createOneVehicule(this.request = {
                    marque: this.marque.trim(),
                    immat: this.immat.trim(),
                    miseCirculation: this.miseCirculation.trim(),
                    dateSortie: this.dateSortie.trim(),
                    iduser: parseInt(this.iduserSelected)
                })?.subscribe((vehicule) => {
                  console.log(vehicule)
                })
                this.valueButton = "Ajouter"
                this.addOrOk = this.cancelBool = false;
                this.getAllVehicules()
            } else {
                this.emptyValue = true;
            }
        }
    }

    cancelAction() {
        this.cancelBool = false;
        this.valueButton = "Ajouter";
        this.addOrOk = false
        this.marque = this.immat = this.miseCirculation = this.dateSortie = "";
        this.iduserSelected = "";
        this.request = {marque: this.marque, immat: this.immat, miseCirculation: this.miseCirculation, dateSortie: this.dateSortie, iduser: parseInt(this.iduserSelected)}
    }

}
