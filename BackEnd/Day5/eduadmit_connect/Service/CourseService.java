package com.admission.eduadmit_connect.Service;

import com.admission.eduadmit_connect.Model.*;
import com.admission.eduadmit_connect.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Long cid) {
        return courseRepository.findById(cid);
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }
    public Course updateCourse(Long cid, Course updatedCourse) {
        Optional<Course> course = courseRepository.findById(cid);
        if (course.isPresent()) {
            updatedCourse.setCid(cid);
            return courseRepository.save(updatedCourse);
        } else {
            return null;
        }
    }

    public void deleteCourse(Long cid) {
        courseRepository.deleteById(cid);
    }
}