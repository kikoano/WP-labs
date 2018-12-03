package com.finki.lab2.web.rest;

import java.util.List;
import java.util.Optional;

import javax.xml.ws.Response;

import com.finki.lab2.model.Student;
import com.finki.lab2.model.StudentDataDto;
import com.finki.lab2.model.exceptions.StudentNotFoundException;
import com.finki.lab2.model.exceptions.StudentPostException;
import com.finki.lab2.service.StudentService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

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
    @PostMapping("add")
    public ResponseEntity<Student> addStudent(@RequestBody StudentDataDto studentDto)
            throws StudentPostException {
        Student s = studentService.addStudent(studentDto);
        return new ResponseEntity<>(s,HttpStatus.CREATED);
    }

    @DeleteMapping("{index}")
    public void deleteStudent(@PathVariable("index") String index) throws StudentNotFoundException{
        studentService.deleteStudent(index);
        
    }
}