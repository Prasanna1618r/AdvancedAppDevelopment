package com.admission.eduadmit_connect.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.admission.eduadmit_connect.Dto.AuthRequest;
import com.admission.eduadmit_connect.Model.StudentModel;
import com.admission.eduadmit_connect.Repository.StudentRepository;
import com.admission.eduadmit_connect.Service.*;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = "*")

public class StudentController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping
    public List<StudentModel> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public StudentModel getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }
    @GetMapping("/email/{email}")
    public StudentModel getStudentByEmail(@PathVariable String email) {
    return studentRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Student not found with email: " + email));
    }
    @GetMapping("/role/{role}")
    public StudentModel getStudentByRole(@PathVariable String role) {
    return studentRepository.findByRole(role)
            .orElseThrow(() -> new RuntimeException("Student not found with role: " + role));
    }


    @PostMapping("/addUser")
    public StudentModel saveLogin(@RequestBody StudentModel login) {
        return studentService.saveLogin(login);
    }

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
                final StudentModel student = studentRepository.findByEmail(authRequest.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("Email not found"));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getEmail(),student.getRoleAsString());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }

    @PutMapping("/{id}")
    public StudentModel updateStudent(@PathVariable Long id, @RequestBody StudentModel updatedStudent) {
        return studentService.updateStudent(id, updatedStudent);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}