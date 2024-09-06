package com.admission.eduadmit_connect.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.admission.eduadmit_connect.Model.*;
import com.admission.eduadmit_connect.Repository.*;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<StudentModel> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<StudentModel> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public StudentModel saveLogin(StudentModel login) {
        login.setPassword(passwordEncoder.encode(login.getPassword()));
        return studentRepository.save(login);
    }
    public StudentModel updateStudent(Long id, StudentModel updatedStudent) {
        Optional<StudentModel> existingStudentOptional = studentRepository.findById(id);
        if (existingStudentOptional.isPresent()) {
            StudentModel existingStudent = existingStudentOptional.get();
            existingStudent.setName(updatedStudent.getName());
            existingStudent.setEmail(updatedStudent.getEmail());
            existingStudent.setPassword(updatedStudent.getPassword());
            existingStudent.setPhnumber(updatedStudent.getPhnumber());
            existingStudent.setRole(updatedStudent.getRole());
            return studentRepository.save(existingStudent);
        } else {
            throw new RuntimeException("Student not found with id: " + id);
        }
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}