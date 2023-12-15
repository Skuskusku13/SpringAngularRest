import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/serviceUser/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersResponse} from "../../response/userResponse/users-response";
import {UserRequest} from "../../request/requestUser/user-request";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

  iduser: number;
  user: UsersResponse;
  nom: string;
  prenom: string;
  disabled: boolean = true;
  userRequest: UserRequest;

  constructor(private userService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getOneUserDetail();
  }

  editOrSave() {
    this.disabled = !this.disabled;
    if(this.disabled) {
      this.userRequest = {
        iduser:  this.iduser,
        nom: this.nom,
        prenom: this.prenom
      }
      this.userService.editUser(this.userRequest);
    }
  }

  changeDisabled() {
    this.disabled = !this.disabled
    this.nom = this.user.nom
    this.prenom = this.user.prenom
  }

  getOneUserDetail() {
      this.route.params.subscribe(params => {
        this.iduser = params['id']
        this.userService.getOneData(this.iduser)
          .subscribe((userResponse: UsersResponse) => {
            this.user = userResponse;
            this.iduser = userResponse.iduser
            this.nom = userResponse.nom
            this.prenom = userResponse.prenom
          })
      })
  }

  deleteOneUser() {
    this.route.params.subscribe(params => {
      this.iduser = params['id']
      this.userService.deleteOneData(this.iduser).subscribe(() => {
        this.router.navigate(["/users"])
      })
    })
  }



}
