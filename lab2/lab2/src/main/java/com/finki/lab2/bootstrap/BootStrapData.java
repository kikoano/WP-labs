package com.finki.lab2.bootstrap;

import com.finki.lab2.model.Student;
import com.finki.lab2.model.StudyProgram;
import com.finki.lab2.persistence.StudentRepository;
import com.finki.lab2.persistence.StudyProgramRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrapData implements CommandLineRunner {

    private final StudentRepository studentRepository;
    private final StudyProgramRepository studyProgramRepository;

    public BootStrapData(StudentRepository studentRepository,StudyProgramRepository studyProgramRepository) {
        this.studentRepository = studentRepository;
        this.studyProgramRepository=studyProgramRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        StudyProgram sp1 = new StudyProgram();
        sp1.setName("KNI");
        studyProgramRepository.save(sp1);

        sp1 = new StudyProgram();
        sp1.setName("PET");
        studyProgramRepository.save(sp1);

        sp1 = new StudyProgram();
        sp1.setName("IKI");
        studyProgramRepository.save(sp1);

        Student s1 = new Student();
        s1.setIndex("152233");
        s1.setName("Erik");
        s1.setLastName("Chandler");
        s1.setStudyProgram(studyProgramRepository.getOne(1L));
        studentRepository.save(s1);
        
        s1 = new Student();
        s1.setIndex("132133");
        s1.setName("Melissa");
        s1.setLastName("Stevens");
        s1.setStudyProgram(studyProgramRepository.getOne(1L));
        studentRepository.save(s1);

        s1 = new Student();
        s1.setIndex("154234");
        s1.setName("Owen");
        s1.setLastName("Huff");
        s1.setStudyProgram(studyProgramRepository.getOne(2L));
        studentRepository.save(s1);

        s1 = new Student();
        s1.setIndex("142233");
        s1.setName("Terry");
        s1.setLastName("Klein");
        s1.setStudyProgram(studyProgramRepository.getOne(2L));
        studentRepository.save(s1);

        s1 = new Student();
        s1.setIndex("152355");
        s1.setName("Kyle");
        s1.setLastName("Barnett");
        s1.setStudyProgram(studyProgramRepository.getOne(3L));
        studentRepository.save(s1);
        
    }

}