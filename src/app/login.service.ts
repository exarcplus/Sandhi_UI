
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Register } from "../app/register";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url: string;
  token: string;
  header: any;

  constructor(private http: HttpClient) {

    this.Url = 'http://165.22.208.85/sandhi/user';

    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  Login(model: any) {
    debugger;
    // var a =this.Url+'UserLogin';  
    var a = this.Url + 'login';
    return this.http.post<any>(this.Url + '/login/', model, { headers: this.header });
  }
  signup(register: Register) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>(this.Url + '/signup/', register, httpOptions)
  };

  getUserByUsername(uName: string) {
    //   return this.http.get<any[]>('${this.url}?username=${uName}');

    return this.http.get<any[]>(this.Url, {
      params: new HttpParams().set('username', uName)
    });

  }

} 