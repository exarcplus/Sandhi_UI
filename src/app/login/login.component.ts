import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../login.service';    

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any;
  errorMessage:string;

  email: string;
    password: string;
    LoginForm:boolean=true;
    constructor(private route:ActivatedRoute,private router:Router,private LoginService:LoginService)
    {
  
    }
    
    

 

  ngOnInit() {
    sessionStorage.removeItem('username');
    sessionStorage.clear();
  }

  login(){    
    debugger;    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/Dashboard']);    
          debugger;    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  }; 
  

  signup(){

    this.router.navigate(['/signup']);
    this.LoginForm=false
  
   }

   Register(){

    this.router.navigate(['/Register']);
    this.LoginForm=false
  
   }

}
