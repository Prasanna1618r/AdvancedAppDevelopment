package com.admission.eduadmit_connect.Controller;

import com.admission.eduadmit_connect.Model.*;
import com.admission.eduadmit_connect.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:5173/",allowedHeaders = "*")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses() {
        return new ResponseEntity<>(courseService.getAllCourses(), HttpStatus.OK);
    }

    @GetMapping("/{cid}")
    public ResponseEntity<Optional<Course>> getCourseById(@PathVariable Long cid) {
        return new ResponseEntity<>(courseService.getCourseById(cid), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Course> saveCourse(@RequestBody Course course) {
        return new ResponseEntity<>(courseService.saveCourse(course), HttpStatus.CREATED);
    }

    @PutMapping("/{cid}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long cid, @RequestBody Course updatedCourse) {
        return new ResponseEntity<>(courseService.updateCourse(cid, updatedCourse), HttpStatus.OK);
    }

    @DeleteMapping("/{cid}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long cid) {
        courseService.deleteCourse(cid);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}