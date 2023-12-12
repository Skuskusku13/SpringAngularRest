import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from "../services/serviceUser/users-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{


  constructor(private userService: UsersServiceService) {
  }

  ngOnInit(): void {

  }

  getDataUsers() {
    this
  }
}
