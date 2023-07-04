import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  registerUser(data: any): Observable<any> {
    let url: string = 'https://localhost:7162/api/User';
    return this.http.post<any>(url, data)
  }
  loginUser(data: any): Observable<any> {
    let dataurl2: string = `https://localhost:7162/api/Token`;
    return this.http.post<any>(dataurl2, data);
  }
  storeToken(mytoken: string) {
    localStorage.setItem('token', mytoken)
  }
  getToken() {
    return localStorage.getItem('token')
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  signout() {
    localStorage.clear();
    this.router.navigate(['home']); 
  }
}

