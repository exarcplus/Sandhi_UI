import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { User } from '../shared/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : User;

  resolved(captchaResponse: any) {
    console.log('Resolved captcha with response ${captchaResponse}:');
  }

   // recaptcha: any[];
//  resolved(captchaResponse: any[]){
  //  this.recaptcha=captchaResponse;
//    console.log(this.recaptcha);

 // }

 userRegistrationForm: FormGroup;


constructor(private fb: FormBuilder) {}

users : User[];

  

 
ngOnInit(): void {

  this.userRegistrationForm= this.fb.group({


    

    
  
    first_name:['',Validators.required],
    last_name:['',Validators.required],
    email:['',Validators.required],
    password1:['',Validators.required],
    password2:['',Validators.required],
    organisation:['',Validators.required],
    profession:['',Validators.required]

  });

 // onSubmit(form:NgForm) {
      
 //   this.service.addSignup(form.value).subscribe(res=>
 //     {
 //       this.resetForm(form);
 //       alert(res)
 //     })

 // }

 //this._service.post(opost)
// .subscribe
//(
// data=>
// {
//   this.users = data;
// }
//);

//var opost = new User();
//opost.first_name='updating first_name';
//opost.last_name='updated the last_name';
//opost.email='raj39v@gmail.com';
//opost.password1='updated the password1';
//opost.password2='updated the password2';
//opost.organisation='updated organisation';
//opost.profession='updated the Profession';



}

onSubmit() {
 // alert(" Successfully Submitted");
}


}
