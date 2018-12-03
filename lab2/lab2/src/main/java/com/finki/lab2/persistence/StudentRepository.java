package com.finki.lab2.persistence;

import com.finki.lab2.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,String>{
   
}