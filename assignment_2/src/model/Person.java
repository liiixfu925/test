/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

/**
 *
 * @author josie
 */
public class Person {
    
    private String userId;
    private String password;
    private String name;
    private String nuId;
    private String status;

    public Person() {
        this.status = "none"; 
    }    
    
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getNuId() {
        return nuId;
    }
    public void setNuId(String nuId) {
        this.nuId = nuId;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    
    @Override
    public String toString(){
        return nuId;
    }
}
