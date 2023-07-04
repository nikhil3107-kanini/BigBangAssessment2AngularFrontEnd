import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-activated-doctor',
  templateUrl: './activated-doctor.component.html',
  styleUrls: ['./activated-doctor.component.css']
})
export class ActivatedDoctorComponent {

  activeDoctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getActiveDoctors();
  }

  getActiveDoctors(): void {
    this.doctorService.getActiveDoctors().subscribe((doctors) => {
      this.activeDoctors = doctors;
    });
  }
}
