export interface Doctor {
    doctorId: number;
    name: string;
    specialty: string;
    address: string;
    phoneNumber: string;
    email: string;
    isActive: boolean;
    patients: Patient[]; // Make sure to include the patients property
  }
  
  export interface Patient {
    patientId: number;
    name: string;
    age: number;
    address: string;
    phoneNumber: string;
    medicalCondition: string;
    doctorId: number;
  }
  