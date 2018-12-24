package com.finki.lab2.web.rest;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.finki.lab2.model.Student;
import com.finki.lab2.model.StudentDataDto;
import com.finki.lab2.model.exceptions.StudentNotFoundException;
import com.finki.lab2.model.exceptions.StudentPostException;
import com.finki.lab2.service.StudentService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

@CrossOrigin({"*", "localhost:3000"})
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
    @ResponseStatus(HttpStatus.CREATED)
    public void addStudent(@RequestBody StudentDataDto studentDataDto,HttpServletResponse response)
            throws StudentPostException {
        Student s = studentService.addStudent(studentDataDto);
        response.setHeader("Location", "students/"+s.getIndex());
    }
    @PatchMapping("{index}")
    public void updateStudent(@PathVariable("index") String index, @RequestBody StudentDataDto studentDataDto) throws StudentNotFoundException, StudentPostException {
        studentService.updateStudent(index, studentDataDto);
    }

    @DeleteMapping("{index}")
    public void deleteStudent(@PathVariable("index") String index) throws StudentNotFoundException{
        studentService.deleteStudent(index);
        
    }
}