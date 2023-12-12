import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from "../services/serviceUser/users-service.service";
import {UsersResponse} from "../response/users-response";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  users: UsersResponse[] = [];

  iduser: number;
  nom: string ="";
  prenom: string ="";

  constructor(private userService: UsersServiceService) {
  }

  ngOnInit(): void {
    this.userService.getAllData()
      .subscribe((userResponse: UsersResponse[]) => {
       this.users = userResponse;
    });
  }
}
