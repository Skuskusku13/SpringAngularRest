import {Component, OnInit} from '@angular/core';
import {VehiculesService} from "../services/serviceVehicule/vehicules.service";
import {VehiculeResponse} from "../response/vehiculeResponse/vehicule-response";
import {Router} from "@angular/router";

@Component({
    selector: 'app-vehicules',
    templateUrl: './vehicules.component.html',
    styleUrls: ['./vehicules.component.scss']
})
export class VehiculesComponent implements OnInit {

    vehicules: VehiculeResponse[] = [];

    constructor(private vehiculesService: VehiculesService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getAllVehicules()
    }

    getAllVehicules() {
        this.vehiculesService.getAllData()
            .subscribe((vehiculeResponse: VehiculeResponse[]) => {
                this.vehicules = vehiculeResponse;
        });
    }

    vehiculeDetails(id: any) {
        return this.router.navigate(["/vehicules/", id]);
    }

}
