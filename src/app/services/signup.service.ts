import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signup} from 'src/app/models/signup-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  readonly APIUrl = "http://165.22.208.85/swagger/"

  addSignup(signup:signup) {
    return this.http.post(this.APIUrl+'/sandhi/user/signup/', signup)
  }

}
