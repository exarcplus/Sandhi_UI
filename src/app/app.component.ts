import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'log-reg3';


  email: any;
  password: any;
  LoginForm:boolean=true;

  constructor(private route:ActivatedRoute,private router:Router)
  {

  }

/*
  ValidateUser() {

    if(this.email=="" && this.password=="")
    {
      alert("login Successfully")
    }
    else{
      alert('invali user')
    }
    
  } 
*/
  signup(){

    this.router.navigate(['/signup']);
    this.LoginForm=false
  
   }

   Login(){

    this.router.navigate(['/login']);
    this.LoginForm=false
  
   }

   Register(){

    this.router.navigate(['/Register']);
    this.LoginForm=false
  
   }
  

}
