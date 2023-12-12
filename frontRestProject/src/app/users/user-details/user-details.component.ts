import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/serviceUser/users.service";
import {ActivatedRoute} from "@angular/router";
import {UsersResponse} from "../../response/userResponse/users-response";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

  userId: any;
  user: UsersResponse;
  constructor(private userService: UsersService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getOneUserDetail();
  }
  getOneUserDetail() {
      this.route.params.subscribe(params => {
        this.userId = params['id']
        this.userService.getOneData(this.userId)
          .subscribe((userResponse: UsersResponse) => {
            this.user = userResponse
          })
      })
  }



}
