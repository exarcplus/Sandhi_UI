import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
    password: string;
    LoginForm:boolean=true;
    constructor(private route:ActivatedRoute,private router:Router)
    {
  
    }
    
    

 

  ngOnInit() {
  }

  signup(){

    this.router.navigate(['/signup']);
    this.LoginForm=false
  
   }

   Register(){

    this.router.navigate(['/Register']);
    this.LoginForm=false
  
   }

}
