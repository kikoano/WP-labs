package com.finki.lab2.web.rest;

import java.util.List;

import com.finki.lab2.model.StudyProgram;
import com.finki.lab2.model.exceptions.StudyProgramDeleteException;
import com.finki.lab2.service.StudyProgramService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin({"*", "localhost:3000"})
@RestController
@RequestMapping("study_programs")
public class StudyProgramController{
    private final StudyProgramService studyProgramService;

    StudyProgramController(StudyProgramService studyProgramService){
        this.studyProgramService=studyProgramService;
    }
    @GetMapping
    public List<StudyProgram> getStudyPrograms(){
        return studyProgramService.getStudyPrograms();
    }
    @PostMapping
    public void addStudyProgram(@RequestBody StudyProgram name){
        studyProgramService.addStudyProgram(name.getName());
    }

    @DeleteMapping("{id}")
    public void deleteStudyProgram(@PathVariable("id") Long id) throws StudyProgramDeleteException{
        studyProgramService.deleteStudyProgram(id);
    }
}