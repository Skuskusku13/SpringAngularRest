import {Component, OnInit} from '@angular/core';
import {VehiculeResponse} from "../../response/vehiculeResponse/vehicule-response";
import {ActivatedRoute, Router} from "@angular/router";
import {VehiculesService} from "../../services/serviceVehicule/vehicules.service";

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.scss']
})
export class VehiculeDetailsComponent implements OnInit{


  vehiculId: any;
  vehicule: VehiculeResponse;
  constructor(private route: ActivatedRoute,
              private vehiculeService: VehiculesService,
              private router: Router) {
  }

  ngOnInit(): void {
   this.getOneVehiculeDetails()
  }

  getOneVehiculeDetails() {
    this.route.params.subscribe(params => {
      this.vehiculId = params['id'];
      this.vehiculeService.getOneData(this.vehiculId)
          .subscribe((vehiculeResponse: VehiculeResponse) => {
            this.vehicule = vehiculeResponse;
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

}
