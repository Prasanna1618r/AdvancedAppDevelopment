package com.admission.eduadmit_connect.Dto;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class CourseDto {
    @Id
    @Column(name = "cid")
    private Long cid;

    @Column(name = "coursename")
    private String coursename;

    @Column(name = "college")
    private String college;

    public Long getCid() {
        return cid;
    }

    public void setCid(Long cid) {
        this.cid = cid;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }
    public CourseDto(Long cid, String coursename, String college) {
        this.cid = cid;
        this.coursename = coursename;
        this.college = college;
        
    }
}
