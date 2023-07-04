import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';
import { Patient } from '../patient';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  
  
  constructor(private doctorService: DoctorService) { }
  role : string | null = null ;

  
  ngOnInit(): void {
    this.getDoctors();
    this.role = localStorage.getItem('role');
    // this.getDoctorsWithPatients();
  }
  
  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => this.doctors = doctors);
  }


  selectedDoctor: Doctor | null = null;

  updateDoctor(doctor: Doctor): void {
    this.selectedDoctor = { ...doctor };
  }

  cancelUpdate(): void {
    this.selectedDoctor = null;
  }
  

  updateDoctorData(): void {
    if (this.selectedDoctor) {
      this.doctorService.updateDoctor(this.selectedDoctor).subscribe(
        () => {
          console.log('Doctor updated successfully.');
          this.selectedDoctor = null; // Clear the update form
        },
        (error) => {
          console.error('Error updating doctor:', error);
        }
      );
    }
  }

  

  

  deleteDoctor(id: number): void {
    this.doctorService.deleteDoctor(id)
      .subscribe(() => {
        this.doctors = this.doctors.filter(d => d.doctorId !== id);
      });
  }

  ChangeStatus(id: number){
    this.doctorService.changestatus(id).subscribe((data)=>{
      console.log(data)
      this.ngOnInit()
    })

  }
}
