package com.admission.eduadmit_connect.Dto;

public class StudentDto {
    private Long id;
    private String name;
    private String email_id;
    private String password;
    private String ph_number;

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

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
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

    public StudentDto(Long id, String name, String email,String password,String phnumber) {
        this.id = id;
        this.name = name;
        this.email_id = email;
        this.password = password;
        this.ph_number = phnumber;
    }
}