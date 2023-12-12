import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  env = environment.apiUrl
  constructor(private http: HttpClient) { }


  getAllData() {
    this.http.get(this.env + "/users")
  }


}
