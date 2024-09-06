package com.admission.eduadmit_connect.Dto;

public class StudentDto {
    private Long id;
    private String name;
    private String email;
    private String password;
    private String ph_number;
    private String role;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getPhnumber() {
        return ph_number;
    }

    public void setPhnumber(String phnumber) {
        this.ph_number = phnumber;
    }
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public StudentDto(Long id, String name, String email,String password,String phnumber,String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.ph_number = phnumber;
        this.role = role;
    }
}