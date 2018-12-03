package com.finki.lab2.persistence;

import com.finki.lab2.model.StudyProgram;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyProgramRepository extends JpaRepository<StudyProgram, Long> {

}