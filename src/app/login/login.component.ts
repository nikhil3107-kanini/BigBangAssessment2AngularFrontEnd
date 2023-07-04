
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMsg: string | null = null
  statuscodee: string = ''

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }
  LoginUser() {
    let logUser: any = {
      username: this.username?.value,
      password: this.password?.value
    }
    this.service.loginUser(logUser).subscribe((data) => {
      console.log(data)
      if (data !== null) {
        console.log(data)
        this.service.storeToken(data.token)
        this.toastr.success('Login Successful', `Welcome ${logUser.username}`, {
          closeButton: true
        });
        localStorage.setItem('role', data.user.role);
        localStorage.setItem('userName', data.user.username)
        let role = localStorage.getItem('role')
        if (role == 'Doctor' || role =='doctor')
          this.router.navigate(['home']);
        if (role == 'Admin' || role =='admin')
          this.router.navigate(['home']);
        if (role == 'Patient' || role == 'patient')
          this.router.navigate(['home']);
      }
    }, (response) => {
      this.errorMsg = response.error;
      this.toastr.error(response.error, 'Failed')
      console.log(response.error, length)
      this.statuscodee = response.status;
    });

    console.log(this.errorMsg)
    console.log(this.statuscodee)
  }
}