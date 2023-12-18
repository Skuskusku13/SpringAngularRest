import {Component, Input, OnInit} from '@angular/core';
import Card from "./card";

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit {

  @Input("componentType") componentType: string;
  componentText: string = "";
  componentLink: string = "";
  componentImages: string = "assets/"

  constructor() {
  }

  ngOnInit(): void {
    this.componentText = this.componentType === 'users' ? 'Voir les utilisateurs enregistrés' : 'Voir les véhicules enregistrés';
    this.componentLink = this.componentType === 'users' ? '/users' : "/vehicules";
    this.componentImages += this.componentType === 'users' ? 'users_accueil.png' : 'vehicules_accueil.png'
  }

}
