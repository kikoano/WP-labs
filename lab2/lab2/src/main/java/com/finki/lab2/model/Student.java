package com.finki.lab2.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PreRemove;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.lang.Nullable;

import lombok.Data;

@Data
@Entity
public class Student {

    @Id
    private String index;
    private String name;
    private String lastName;
    @ManyToOne
    //@OnDelete(action = OnDeleteAction.CASCADE)
    private StudyProgram studyProgram;

}