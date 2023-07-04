import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './gaurd/auth.guard';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { ActivatedDoctorComponent } from './activated-doctor/activated-doctor.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

const routes: Routes = [
{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'doctor', component:DoctorComponent, canActivate:[AuthGuard]},
{path:'patient', component:PatientComponent, canActivate:[AuthGuard]},
{path:'activated-doctor', component:ActivatedDoctorComponent, canActivate:[AuthGuard]},
{path:'register-doctor', component:RegisterDoctorComponent, canActivate:[AuthGuard]},
{path:'view-patient', component:ViewPatientComponent, canActivate:[AuthGuard]},

{path:'home', component:HomeComponent, canActivate:[AuthGuard]}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
