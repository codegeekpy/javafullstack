package com.example.firstproject;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Controller;
// import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// @Controller /*Annotation */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired //injecting the repository in the controller class
    UserRepository ur;


    @GetMapping("/home")
    String m1(){
        return "Home";
    }

    @GetMapping("/reg")
    String m2(){
        return "Register";
    }
    @PostMapping("/register")
    String m3(@RequestBody Users nu){

        Users eu = this.ur.findByUsername(nu.getUsername());
        if(eu != null){
            return "User Already Exists";   
        }
        return "Invalid User";

    }






    //------------------------------------------
    // String m3(String user,String email,String psw,Model model){

    //     Users nu = new Users();
    //     nu.setUsername(user);
    //     nu.setEmail(email);
    //     nu.setPassword(psw);
    //     //to send the object from spring server to mysql server
    //     ur.save(nu);

    //     System.out.println(user);
    //       System.out.println(email);
    //         System.out.println(psw);
    //         model.addAttribute("name",user);
    //         model.addAttribute("mail",email);
    //         model.addAttribute("psw",psw);
    //     return "Admin";
    // }


}
/* When request is send to spring boot it enter to the annotated class and get mapped  */