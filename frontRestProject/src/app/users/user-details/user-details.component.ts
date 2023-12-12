import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from "../../services/serviceUser/users-service.service";
import {ActivatedRoute} from "@angular/router";
import {UsersResponse} from "../../response/users-response";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

  userId: any;
  user: UsersResponse;
  constructor(private userService: UsersServiceService,
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
