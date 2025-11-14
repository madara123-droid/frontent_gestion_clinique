import { Injectable } from '@angular/core';
import {Patient as  PatientModel} from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: PatientModel[]=[
    {
      idpatient:1,
      nom:'Doe',
      prenom:'John',
      date_naissance:new Date('1980-01-01'),
      sexe:'M',
      adresse:'123 Main St',
      telephone:'555-1234',
      email:''
    } ,
    {
      idpatient:2,
      nom:'Smith',
      prenom:'Jane',
      date_naissance:new Date('1990-02-02'),
      sexe:'F',
      adresse:'456 Elm St',
      telephone:'555-5678',
      email:''
    }
  ];
  // methode pour recuperer la liste des patients
  getpatient(): PatientModel[] {return this.patients; }
  // methode pour ajouter un patient
  addPatient(newpatient: PatientModel): void {this.patients.push(newpatient); }
  //methode pour recuperer un patient par son id
  getidPatient(id:number):PatientModel | undefined{
    return this.patients.find(patient => patient.idpatient === id);
  }
}
