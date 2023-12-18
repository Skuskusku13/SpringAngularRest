export class VehiculeResponse {
  idvehicule: number;
  marque: string;
  immat: string;
  miseCirculation: string;
  dateSortie: string;
  users: {
    iduser: number;
    nom: string;
    prenom: string;
  };
}
