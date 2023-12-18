import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../services/serviceUser/users.service";
import {UsersResponse} from "../response/userResponse/users-response";
import {Router} from "@angular/router";
import {UserRequest} from "../request/requestUser/user-request";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UsersResponse[] = [];
  valueButton: string;
  nom: string = "";
  prenom: string = "";
  request: UserRequest;
  addOrOk: boolean = false;
  cancelBool: boolean = false;
  emptyValue: boolean = false;

  constructor(private userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.valueButton = "Ajouter"
  }

  getAllUsers() {
    this.userService.getAllData()
      .subscribe((userResponse: UsersResponse[]) => {
        this.users = userResponse;
      });
  }

  userDetail(id: any) {
    return this.router.navigate(["/users/", id]);
  }

  addUser() {
    this.valueButton = "Sauvegarder";
    this.addOrOk = true;
    if (this.valueButton === "Sauvegarder") {
      this.cancelBool = true;
      if (this.nom.trim() && this.prenom.trim()) {
        this.emptyValue = false
        this.userService.createUser(this.request = {
          prenom: this.prenom.trim(),
          nom: this.nom.trim()
        })
        console.log(this.request)
        this.valueButton = "Ajouter"
        this.addOrOk = this.cancelBool = false;
        setTimeout(() => {
          this.getAllUsers()
        }, 1000)
      } else {
        this.emptyValue = true;
      }
    }
  }

  cancelAction() {
    this.cancelBool = false;
    this.valueButton = "Ajouter";
    this.addOrOk = false
    this.nom = this.prenom = "";
    this.request = {nom: this.nom, prenom: this.prenom}
  }
}
