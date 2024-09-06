package com.admission.eduadmit_connect.Config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.admission.eduadmit_connect.Model.*;
import com.admission.eduadmit_connect.Repository.*;

@Component
public class UserInfoUserDetailsService implements UserDetailsService {
    @Autowired
    private StudentRepository repository;

    @Override
    public UserDetails loadUserByUsername(String usermail) throws UsernameNotFoundException {
        Optional<StudentModel> loginInfo = repository.findByEmail(usermail);
        return loginInfo.map(UserInfoUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + usermail));

    }
}