package com.finki.lab2.service;

import java.util.List;
import java.util.Optional;

import com.finki.lab2.model.Student;
import com.finki.lab2.model.StudentDataDto;
import com.finki.lab2.model.exceptions.StudentNotFoundException;
import com.finki.lab2.model.exceptions.StudentPostException;

public interface StudentService {
    List<Student> findAllStudents();
    Student getStudentById(String index);
    List<Student> getStudentsByProgram(Long id);
    Student addStudent(StudentDataDto studentDataDto) throws StudentPostException;
    void deleteStudent(String index) throws StudentNotFoundException;

}