import { Component, OnInit } from '@angular/core';


import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patients: Patient[] = [];
  


  constructor(private patientService: PatientService){}

  role : string | null = null ;

  
  ngOnInit(): void {
    this.getPatients();
    this.role = localStorage.getItem('role');
  }

  getPatients(): void {
    this.patientService.getAllPatients()
      .subscribe((patients: Patient[]) => {
        this.patients = patients;
      });
  }


}
