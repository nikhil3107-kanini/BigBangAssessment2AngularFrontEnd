import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService,  private router: Router, private toast: ToastrService) { }

  errorMsg: string = '';
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]*')]),
    userEmail: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('', [Validators.required])
  })
  get userName() {
    return this.loginForm.get('userName');

  }

  get userEmail() {
    return this.loginForm.get('userEmail');
  }
  get password() {
    return this.loginForm.get('password');
  }

  get role() {
    return this.loginForm.get('role')
  }
  ngOnInit(): void {
  }
  SignUp() {
    let regUser: any = {
      userName: this.userName?.value,
      userEmail: this.userEmail?.value,
      password: this.password?.value,
      role: this.role?.value
    }

    console.log(this.loginForm.value)
    console.log(this.userName?.value)
    console.log(regUser)
    this.service.registerUser(regUser).subscribe((data) => {
      console.log(data);
      if (data !== null) {
        this.toast.success('Registered Successfully')
        this.router.navigate(['login']);
      }

    }, (response) => {
      this.toast.error('Failed')
      this.errorMsg = response.error;
    });
  }
}