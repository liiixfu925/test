/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

import java.util.ArrayList;

/**
 *
 * @author josie
 */
public class Admin {
    private ArrayList<Person> personList;

    public Admin() {
        this.personList = new ArrayList<Person>();
    }
    
    public ArrayList<Person> getPersonList() {
        return personList;
    }

    public void setPersonList(ArrayList<Person> personList) {
        this.personList = personList;
    }
    
    public Person addPerson(){
        Person person = new Person();
        personList.add(person);
        return person;
    }
    
    public void deletePerson(Person person){
        personList.remove(person);
    }
    
    public Person searchPerson(String nuId){
        for(Person person: personList){
            if(person.getNuId().equals(nuId)){
                return person; 
            }
        }
        return null;
    }
}
