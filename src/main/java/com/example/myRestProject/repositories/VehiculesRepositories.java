package com.example.myRestProject.repositories;

import com.example.myRestProject.models.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehiculesRepositories extends JpaRepository<Vehicule, Integer> {

}
