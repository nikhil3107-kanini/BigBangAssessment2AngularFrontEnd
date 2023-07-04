import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {
  patientForm: FormGroup;
  role : string | null = null ;
  isRegistered: boolean = false;

  ngOnInit(): void {

    this.role = localStorage.getItem('role');
    
  }

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ) {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      medicalCondition: ['', Validators.required],
      doctorId: ['', Validators.required],
    });
  }
 

  addPatient(): void {
    if (this.patientForm.valid) {
      // Call the patient service to add the patient
      this.patientService.addPatient(this.patientForm.value).subscribe(
        (response) => {
          // If the patient is successfully registered, set the isRegistered variable to true
          this.isRegistered = true;
          this.patientForm.reset();
        },
        (error) => {
          // Handle any errors that occur during registration (optional)
        }
      );
    }
  }
}