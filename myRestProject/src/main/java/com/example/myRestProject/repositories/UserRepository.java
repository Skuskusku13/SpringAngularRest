package com.example.myRestProject.repositories;

import com.example.myRestProject.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Integer> {

}
