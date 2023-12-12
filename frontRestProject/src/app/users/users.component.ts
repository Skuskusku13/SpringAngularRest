import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from "../services/serviceUser/users-service.service";
import {UsersResponse} from "../response/users-response";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  users: UsersResponse[] = [];

  constructor(private userService: UsersServiceService,
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
