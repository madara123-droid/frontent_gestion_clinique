import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PatientService } from '../../services/Patient.service';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.css'
})
export class PatientFormComponent {
  nouveauPatient: Partial<Patient> = {
    nom: '',  
    prenom: '',
    date_naissance: new Date(),
    sexe: '',
    adresse: '',
    telephone: '',
    email: ''
  };

  constructor(
    private patientService: PatientService,
    private router: Router,
  ) {}

  onSubmit(): void {
    const estValide = this.nouveauPatient.nom && 
                     this.nouveauPatient.prenom && 
                     this.nouveauPatient.date_naissance && 
                     this.nouveauPatient.sexe && 
                     this.nouveauPatient.adresse && 
                     this.nouveauPatient.telephone;

    if (estValide) {
      try {
        this.patientService.addPatient(this.nouveauPatient as Patient);
        this.router.navigate(['/patients']);
      } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'ajout du patient');
      }
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  // ⭐ NOUVELLE MÉTHODE POUR RÉINITIALISER
  reinitialiser(): void {
    this.nouveauPatient = {
      nom: '',  
      prenom: '',
      date_naissance: new Date(),
      sexe: '',
      adresse: '',
      telephone: '',
      email: ''
    };
  }
}