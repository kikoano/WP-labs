package com.finki.lab2.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.finki.lab2.model.Student;
import com.finki.lab2.model.StudentDataDto;
import com.finki.lab2.model.StudyProgram;
import com.finki.lab2.model.exceptions.StudentNotFoundException;
import com.finki.lab2.model.exceptions.StudentPostException;
import com.finki.lab2.persistence.StudentRepository;
import com.finki.lab2.persistence.StudyProgramRepository;
import com.finki.lab2.service.StudentService;

import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

private final StudentRepository studentRepository;
private final StudyProgramRepository studyProgramRepository;

public StudentServiceImpl(StudentRepository studentRepository,StudyProgramRepository studyProgramRepository) {
	this.studentRepository=studentRepository;
	this.studyProgramRepository=studyProgramRepository;
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

	@Override
	public Student addStudent(StudentDataDto studentDataDto) throws StudentPostException {
		System.out.println(studentDataDto.index);
		System.out.println(studentDataDto.name);
		System.out.println(studentDataDto.lastName);
		System.out.println(studentDataDto.studyProgramName);
		if(studentDataDto.index == null || studentDataDto.name == null || studentDataDto.lastName == null || studentDataDto.studyProgramName ==null)
			throw new StudentPostException();
		if(studentDataDto.index.length()!=6)
			throw new StudentPostException();
		if(!studyProgramRepository.existsById(Long.parseLong(studentDataDto.studyProgramName)))
			throw new StudentPostException();
		Student s = new Student();
		s.setIndex(studentDataDto.index);
		s.setName(studentDataDto.name);
		s.setLastName(studentDataDto.lastName);
		StudyProgram p = studyProgramRepository.findById(Long.parseLong(studentDataDto.studyProgramName)).get();
		s.setStudyProgram(p);
		return studentRepository.save(s);
	}
	

   

}