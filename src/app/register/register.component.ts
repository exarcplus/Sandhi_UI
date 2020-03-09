import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Register} from '../register'; 
import { MustMatch } from '../_helpers/must-match.validator'; 
import { LoginService } from '../login.service';  
import { Router } from '@angular/router'; 


import { NgForm, } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  

  resolved(captchaResponse: any) {
    console.log('Resolved captcha with response ${captchaResponse}:');
  }
 // recaptcha: any[];
//  resolved(captchaResponse: any[]){
  //  this.recaptcha=captchaResponse;
//    console.log(this.recaptcha);

 // }

 data = false;    
  // UserForm: any;  
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  
 
  
  massage:string;    
  constructor(private router:Router,private formbulider: FormBuilder,private loginService:LoginService) { }    
    
  ngOnInit() {    


    this.loginForm = this.formbulider.group({    
  
   
   
   username: ['', [Validators.required, Validators.email]],
   first_name: ['', Validators.required],
   last_name: ['', Validators.required],
   organisation: ['', Validators.required],
   profession: ['', Validators.required],
   email: ['', [Validators.required, Validators.email]],
   password1: ['',[Validators.required, Validators.minLength(8)]],
   password2: ['', Validators.required]
   
    },
    {
      validator: MustMatch('password1', 'password2')
   }
    
    );    
  }
  
  get f() {
    return this.loginForm.controls;
  }


   onFormSubmit()    
  {    
    const user = this.loginForm.value;    
    this.Createuser(user);  
    this.submitted = true 

 
 
     // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
      }


    
     
  }    
  Createuser(register:Register)    
  {    
  this.loginService.signup(register).subscribe(    
    () =>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.loginForm.reset();    
    });    

  }   


  

 


}
