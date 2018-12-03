package com.finki.lab2.service;

import java.util.List;
import java.util.Optional;

import com.finki.lab2.model.Student;
import com.finki.lab2.model.exceptions.StudentNotFoundException;

public interface StudentService {
    List<Student> findAllStudents();
    Student getStudentById(String index);
    List<Student> getStudentsByProgram(Long id);
    void deleteStudent(String index) throws StudentNotFoundException;

}