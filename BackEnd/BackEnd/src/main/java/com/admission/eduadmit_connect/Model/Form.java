package com.admission.eduadmit_connect.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Form {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String dob;
    private String email;
    private String mobile;
    private String gender;
    private String address;
    private String aadharNumber;
    private String tenthMark;
    private String twelfthMark;
    private String college;
    private String engcourse;
    private String artscourse;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAadharNumber() {
        return aadharNumber;
    }

    public void setAadharNumber(String aadharNumber) {
        this.aadharNumber = aadharNumber;
    }

    public String getTenthMark() {
        return tenthMark;
    }

    public void setTenthMark(String tenthMark) {
        this.tenthMark = tenthMark;
    }

    public String getTwelfthMark() {
        return twelfthMark;
    }

    public void setTwelfthMark(String twelfthMark) {
        this.twelfthMark = twelfthMark;
    }
    public String getCollege() {
        return college;
    }
    public void setCollege(String college) {
        this.college = college;
    }
    public String getEngcourse() {
        return engcourse;
    }

    public void setEngcourse(String engcourse) {
        this.engcourse = engcourse;
    }
    public String getArtscourse() {
        return artscourse;
    }

    public void setArtscourse(String artscourse) {
        this.artscourse = artscourse;
    }

}