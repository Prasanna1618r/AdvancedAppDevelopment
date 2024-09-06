package com.admission.eduadmit_connect.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.admission.eduadmit_connect.Model.*;

public interface StudentRepository extends JpaRepository<StudentModel, Long> {
    
}