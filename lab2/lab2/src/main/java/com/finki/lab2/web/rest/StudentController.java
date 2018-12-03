package com.finki.lab2.web.rest;

import java.util.List;
import java.util.Optional;

import com.finki.lab2.model.Student;
import com.finki.lab2.model.exceptions.StudentNotFoundException;
import com.finki.lab2.service.StudentService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("students")
public class StudentController{

    private final StudentService studentService;

    StudentController(StudentService studentService){
        this.studentService=studentService;
    }

    @GetMapping
    public List<Student> getStudents(){
        return studentService.findAllStudents();
    }
    @GetMapping("{index}")
    public Student getStudentByIndex(@PathVariable("index") String index){
        return studentService.getStudentById(index);
    }
    @GetMapping("by_study_program/{id}")
    public List<Student> getStudentsByProgram(@PathVariable("id") Long id){
        return studentService.getStudentsByProgram(id);
    }


    @DeleteMapping("{index}")
    public void deleteStudent(@PathVariable("index") String index) throws StudentNotFoundException{
        studentService.deleteStudent(index);
    }
}