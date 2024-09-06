package com.admission.eduadmit_connect.Repository;

import com.admission.eduadmit_connect.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepo extends JpaRepository<Form, Long> {
    
}