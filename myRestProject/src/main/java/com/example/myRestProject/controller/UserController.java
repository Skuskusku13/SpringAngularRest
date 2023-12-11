package com.example.myRestProject.controller;

import com.example.myRestProject.models.Users;
import com.example.myRestProject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping("")
    public List<Users> index() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Users show(@PathVariable String id) {
        int iduser = Integer.parseInt(id);
        return repository.findById(iduser).get();
    }

    @PostMapping("")
    public Users create(@RequestBody Map<String, String> body) {
        String nom = body.get("nom");
        String prenom = body.get("prenom");
        return repository.save(new Users(nom, prenom));
    }

    @PutMapping("/{id}")
    public Users update(@PathVariable String id, @RequestBody Map<String, String> body) {
        int iduser = Integer.parseInt(id);
        Users users = repository.findById(iduser).get();
        users.setNom(body.get("nom"));
        users.setPrenom(body.get("prenom"));
        return repository.save(users);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable String id) {
        int iduser = Integer.parseInt(id);
        Users users = repository.findById(iduser).get();
        repository.delete(users);
        return true;
    }

}
