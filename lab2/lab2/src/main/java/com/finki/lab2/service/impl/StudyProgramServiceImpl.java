package com.finki.lab2.service.impl;

import java.util.List;

import com.finki.lab2.model.Student;
import com.finki.lab2.model.StudyProgram;
import com.finki.lab2.model.exceptions.StudyProgramDeleteException;
import com.finki.lab2.persistence.StudentRepository;
import com.finki.lab2.persistence.StudyProgramRepository;
import com.finki.lab2.service.StudyProgramService;

import org.springframework.stereotype.Service;

@Service
public class StudyProgramServiceImpl implements StudyProgramService {
    private final StudentRepository studentRepository;
    private final StudyProgramRepository studyProgramRepository;
    public StudyProgramServiceImpl(StudentRepository studentRepository,StudyProgramRepository studyProgramRepository) {
        this.studentRepository = studentRepository;
        this.studyProgramRepository = studyProgramRepository;
    }

    @Override
    public void addStudyProgram(String name) {
        StudyProgram studyProgram = new StudyProgram();
        studyProgram.setName(name);
        System.out.println(name);
        studyProgramRepository.save(studyProgram);
    }

    @Override
    public List<StudyProgram> getStudyPrograms() {
		return studyProgramRepository.findAll();
	}

    @Override
    public void deleteStudyProgram(Long id) throws StudyProgramDeleteException {
        for (Student s : studentRepository.findAll()) {
            if(s.getStudyProgram().getId().equals(id))
                throw new StudyProgramDeleteException();
        }
        studyProgramRepository.deleteById(id);
    }
}