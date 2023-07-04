import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'https://localhost:7162/api/Patient'; 
 

  constructor(private http: HttpClient) { }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.baseUrl, patient);
  }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl);
  }
  // Read
  // getDoctors(): Observable<Patient[]> {
  //   return this.http.get<Patient[]>(this.baseUrl);
  // }
  
}
