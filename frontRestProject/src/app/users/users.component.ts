import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/serviceUser/users.service";
import {UsersResponse} from "../response/userResponse/users-response";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  users: UsersResponse[] = [];

  constructor(private userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getAllData()
      .subscribe((userResponse: UsersResponse[]) => {
       this.users = userResponse;
    });
  }

  userDetail(id: any) {
    return this.router.navigate(["/users/", id]);
  }
}
