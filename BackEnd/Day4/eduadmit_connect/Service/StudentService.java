package com.admission.eduadmit_connect.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admission.eduadmit_connect.Model.*;
import com.admission.eduadmit_connect.Repository.*;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<StudentModel> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<StudentModel> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public StudentModel saveStudent(StudentModel student) {
        return studentRepository.save(student);
    }
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}