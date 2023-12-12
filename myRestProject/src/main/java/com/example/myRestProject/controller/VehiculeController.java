package com.example.myRestProject.controller;

import com.example.myRestProject.models.Vehicule;
import com.example.myRestProject.repositories.VehiculesRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("vehicules")
public class VehiculeController {

    @Autowired
    private VehiculesRepositories vehiculesRepositories;

    @GetMapping("")
    public List<Vehicule> index() {
        return vehiculesRepositories.findAll();
    }

    @GetMapping("/{id}")
    public Vehicule show(@PathVariable String id) {
        int idvehicule = Integer.parseInt(id);
        return vehiculesRepositories.findById(idvehicule).get();
    }

    @PostMapping("")
    public Vehicule create(@RequestBody Map<String, String> body) {
        String marque = body.get("marque");
        String immat = body.get("immat");
        String miseCirculation = body.get("miseCirculation");
        String dateSortie = body.get("dateSortie");
        return vehiculesRepositories.save(new Vehicule(marque, immat, miseCirculation, dateSortie));
    }

    @PutMapping("/{id}")
    public Vehicule update(@PathVariable String id, @RequestBody Map<String, String> body) {
        int idvehicule = Integer.parseInt(id);
        Vehicule vehicule = vehiculesRepositories.findById(idvehicule).get();
        vehicule.setMarque(body.get("marque"));
        vehicule.setImmat(body.get("immat"));
        vehicule.setMiseCirculation(body.get("miseCirculation"));
        vehicule.setDateSortie(body.get("dateSortie"));
        return vehiculesRepositories.save(vehicule);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable String id) {
        int idvehicule = Integer.parseInt(id);
        vehiculesRepositories.deleteById(idvehicule);
        return true;
    }

}
