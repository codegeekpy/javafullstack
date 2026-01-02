package com.example.firstproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int sno;

    @Column
    String username;

    @Column
    String email;

    @Column 
    String password;

    void setUsername(String n){
        this.username = n;
    }

    void setEmail(String e){
        this.email = e;
    }

    void setPassword(String p){
        this.password = p;
    }
    String getUsername(){
        return this.username;
    }

}
