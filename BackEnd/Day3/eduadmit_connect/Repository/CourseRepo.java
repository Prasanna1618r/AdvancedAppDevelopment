package com.admission.eduadmit_connect.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.admission.eduadmit_connect.Model.Course;

@Repository
public interface CourseRepo extends JpaRepository<Course, Long> {
}