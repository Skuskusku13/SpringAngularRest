import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environments";
import {UsersResponse} from "../../response/userResponse/users-response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  env = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getAllData(): Observable<UsersResponse[]> {
   return this.http.get<UsersResponse[]>(this.env + "/users")
  }
  getOneData(id: any): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.env + "/users/" + id)
  }


}