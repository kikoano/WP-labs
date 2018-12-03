package com.finki.lab2.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.finki.lab2.model.Student;
import com.finki.lab2.model.exceptions.StudentNotFoundException;
import com.finki.lab2.persistence.StudentRepository;
import com.finki.lab2.service.StudentService;

import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

private final StudentRepository studentRepository;

public StudentServiceImpl(StudentRepository studentRepository){
    this.studentRepository=studentRepository;
}
    @Override
	public List<Student> findAllStudents() {
		return studentRepository.findAll();
		//return studentRepository.findAll().stream().filter(p -> p instanceof Student).collect(Collectors.toList());
	}

	@Override
	public Student getStudentById(String index) {
		return studentRepository.findById(index).get();
	}

	@Override
	public List<Student> getStudentsByProgram(Long id) {
		return studentRepository.findAll().stream().filter(f-> f.getStudyProgram().getId().equals(id)).collect(Collectors.toList());
	}

	@Override
	public void deleteStudent(String index) throws StudentNotFoundException {
		if(studentRepository.existsById(index))
			studentRepository.deleteById(index);
		else
			throw new StudentNotFoundException();
	}
	

   

}