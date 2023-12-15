import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environments";
import {UsersResponse} from "../../response/userResponse/users-response";
import {Observable} from "rxjs";
import {UserRequest} from "../../request/requestUser/user-request";


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
  deleteOneData(id: any): any {
    return this.http.delete(this.env + "/users/" + id)
  }
  createUser(request: UserRequest) {
    let url = this.env + "/users";
    return this.http.post<UserRequest>(url, request).subscribe((resolve) => {
      console.log(resolve)
    })
  }

  editUser(request: UserRequest) {
    let url = this.env + "/users/" + request.iduser;
    return this.http.put<UserRequest>(url, request).subscribe((resolve) => {
      console.log(resolve)
    })
  }


}
