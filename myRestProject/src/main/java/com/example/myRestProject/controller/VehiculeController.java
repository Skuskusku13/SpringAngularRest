package com.example.myRestProject.controller;

import com.example.myRestProject.models.Users;
import com.example.myRestProject.models.Vehicule;
import com.example.myRestProject.repositories.UserRepository;
import com.example.myRestProject.repositories.VehiculesRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@RestController
@RequestMapping("/vehicules")
public class VehiculeController {

    @Autowired
    private VehiculesRepositories vehiculesRepositories;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public List<Vehicule> index() {
        return vehiculesRepositories.findAll();
    }

    @GetMapping("/{id}")
    public Vehicule show(@PathVariable String id) {
        int idvehicule = parseInt(id);
        return vehiculesRepositories.findById(idvehicule).get();
    }

    @PostMapping("")
    public Vehicule create(@RequestBody Map<String, String> body) {
        String marque = body.get("marque");
        String immat = body.get("immat");
        String miseCirculation = body.get("miseCirculation");
        String dateSortie = body.get("dateSortie");
        Optional<Users> user = userRepository.findById(Integer.parseInt(body.get("iduser")));
        return vehiculesRepositories.save(new Vehicule(marque, immat, miseCirculation, dateSortie, user.get()));
    }

    @PutMapping("/{id}")
    public Vehicule update(@PathVariable String id, @RequestBody Map<String, String> body) {
        int idvehicule = parseInt(id);
        Vehicule vehicule = vehiculesRepositories.findById(idvehicule).get();
        vehicule.setMarque(body.get("marque"));
        vehicule.setImmat(body.get("immat"));
        vehicule.setMiseCirculation(body.get("miseCirculation"));
        vehicule.setDateSortie(body.get("dateSortie"));
        Optional<Users> user = userRepository.findById(Integer.parseInt(body.get("iduser")));
        user.get().setIduser(Integer.parseInt(body.get("iduser")));

        System.out.println(vehicule);

        return vehiculesRepositories.save(vehicule);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable String id) {
        int idvehicule = parseInt(id);
        vehiculesRepositories.deleteById(idvehicule);
        return true;
    }

}
