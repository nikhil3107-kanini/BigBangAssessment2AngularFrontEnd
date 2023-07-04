import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControlName } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

  doctorForm: FormGroup;
  role : string | null = null ;
  isRegistered: boolean = false;

  ngOnInit(): void {

    this.role = localStorage.getItem('role');
    
  }
  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService
  ) {
    this.doctorForm = this.formBuilder.group({
      name: ['', Validators.required],
      specialty: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isActive: [false]
    });
  }

  addDoctor(): void {
    if (this.doctorForm.valid) {
      // Call the doctor service to add the doctor
      this.doctorService.addDoctor(this.doctorForm.value).subscribe(
        (response) => {
          // If the doctor is successfully registered, set the isRegistered variable to true
          this.isRegistered = true;
          this.doctorForm.reset();
        },
        (error) => {
          // Handle any errors that occur during registration (optional)
        }
      );
    }
}
}
