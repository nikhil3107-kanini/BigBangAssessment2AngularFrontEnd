import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor'; 

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = 'https://localhost:7162/api/Doctor'; 
  private apiUrl = 'https://localhost:7162/api/Activate'; 


  constructor(private http: HttpClient) { }

  // Create
  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.baseUrl, doctor);
  }

  // Read
  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseUrl);
  }

  // Update
  updateDoctor(doctor: Doctor): Observable<any> {
    const url = `${this.baseUrl}/${doctor.doctorId}`;
    return this.http.put(url, doctor);
  }

  // Delete
  deleteDoctor(id: number): Observable<Doctor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Doctor>(url);
  }

  getActiveDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }
  changestatus(id: number):Observable<any>{
    let dataurl = `https://localhost:7162/api/Activate/api/doctor/change-status/${id}`
    return this.http.put<any>(dataurl,id);
  }
 
  getAllDoctorsWithPatients(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}/api/doctors`);
  }
}
