import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {VehiculeResponse} from "../../response/vehiculeResponse/vehicule-response";
import {Observable} from "rxjs";
import {VehiculeRequest} from "../../request/requestVehicule/vehicule-request";

@Injectable({
    providedIn: 'root'
})
export class VehiculesService {

    env = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getAllData(): Observable<VehiculeResponse[]> {
        return this.http.get<VehiculeResponse[]>(this.env + "/vehicules");
    }

    getOneData(id: any): Observable<VehiculeResponse> {
        return this.http.get<VehiculeResponse>(this.env + "/vehicules/" + id);
    }

    deleteOneVehicule(id: any) {
        return this.http.delete(this.env + "/vehicules/" + id);
    }

    createOneVehicule(request: VehiculeRequest) {
        let url = this.env + "/vehicules";
        return this.http.post<VehiculeRequest>(url, request)
    }
}
