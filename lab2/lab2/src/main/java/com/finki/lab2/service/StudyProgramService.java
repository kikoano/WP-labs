package com.finki.lab2.service;

import java.util.List;

import com.finki.lab2.model.StudyProgram;
import com.finki.lab2.model.exceptions.StudyProgramDeleteException;

public interface StudyProgramService {
    public void addStudyProgram(String name);
    public List<StudyProgram> getStudyPrograms();
    public void deleteStudyProgram(Long id) throws StudyProgramDeleteException;
}