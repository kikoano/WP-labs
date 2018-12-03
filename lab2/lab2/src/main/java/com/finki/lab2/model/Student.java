package com.finki.lab2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Student{

    @Id
    private String index;
    private String name;
    private String lastName;
    @ManyToOne
    private StudyProgram studyProgram;
    
}