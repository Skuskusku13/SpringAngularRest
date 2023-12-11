package com.example.myRestProject.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@Data
@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iduser;
    private String nom, prenom;

    public Users() {}

    public Users(String nom, String prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
}
