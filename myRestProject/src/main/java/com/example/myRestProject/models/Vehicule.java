package com.example.myRestProject.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.User;

import java.util.Date;


@Setter
@Getter
@Data
@Entity
public class Vehicule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idvehicule;
    private String marque, immat;

    private String miseCirculation;

    private String dateSortie;

    @OneToOne
    @JoinColumn(name = "iduser")
    private Users users;

    public Vehicule() {
    }

    public Vehicule(String marque, String immat, String miseCirculation, String dateSortie) {
        this.marque = marque;
        this.immat = immat;
        this.miseCirculation = miseCirculation;
        this.dateSortie = dateSortie;
    }
}
