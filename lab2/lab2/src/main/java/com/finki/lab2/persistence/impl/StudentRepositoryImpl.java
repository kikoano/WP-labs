package com.finki.lab2.persistence.impl;

import java.util.List;

import javax.annotation.PostConstruct;

import com.finki.lab2.model.Student;
import com.finki.lab2.persistence.StudentRepository;

import org.springframework.stereotype.Repository;

@Repository
public class StudentRepositoryImpl /*implements StudentRepository*/ {

    private static List<Student> students;
    @PostConstruct
    public void init(){
        
    }
  
    
}