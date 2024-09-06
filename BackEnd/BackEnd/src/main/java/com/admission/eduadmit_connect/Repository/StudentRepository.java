package com.admission.eduadmit_connect.Repository;

import java.util.Optional;
// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.admission.eduadmit_connect.Model.*;

public interface StudentRepository extends JpaRepository<StudentModel, Long> {
    Optional<StudentModel> findByEmail(String email);
    Optional<StudentModel> findByRole(String role);
}