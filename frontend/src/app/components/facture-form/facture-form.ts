import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Factureservice } from '../../services/facture';
import { PatientService } from '../../services/Patient.service';

@Component({
  selector: 'app-facture-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './facture-form.css',
  templateUrl: './facture-form.html'
})
export class FactureFormComponent implements OnInit {

  factureForm: FormGroup;
  patients: any[] = [];

  constructor(
    private factureService: Factureservice,
    public router: Router,
    private fb: FormBuilder,
    private patientService: PatientService
  ) { 
    this.factureForm = this.fb.group({
      patientId: ['', Validators.required],
      patientNom: ['', Validators.required],
      dateCreation: [new Date().toISOString().split('T')[0], Validators.required],
      montant: [0, [Validators.required, Validators.min(1)]],
      statut: ['en attente', Validators.required],
      consultation: ['', Validators.required],
      medicament: [''],
      note: ['']
    });
  }

  ngOnInit(): void {
    this.chargerPatients();
  }

  chargerPatients(): void {
    // Simule le chargement des patients
    this.patients = [
      { idpatient: 1, nom: 'Doe', prenom: 'John' },
      { idpatient: 2, nom: 'Smith', prenom: 'Jane' },
      { idpatient: 3, nom: 'Dupont', prenom: 'Pierre' }
    ];
  }

  onPatientSelection(): void {
    const patientId = this.factureForm.get('patientId')?.value;
    const patient = this.patients.find(p => p.idpatient === +patientId);
    
    if (patient) {
      this.factureForm.patchValue({
        patientNom: `${patient.prenom} ${patient.nom}`
      });
    }
  }

  onSubmit(): void {
    if (this.factureForm.valid) {
      const formData = this.factureForm.value;
      
      // Création de la nouvelle facture selon votre modèle
      const nouvelleFacture = {
        idFacture: 0, // Sera auto-généré par addFacture
        patientId: +formData.patientId,
        patientNom: formData.patientNom,
        dateCreation: new Date(formData.dateCreation),
        montant: +formData.montant,
        statut: formData.statut as 'en attente' | 'payée' | 'annulée' | 'en retard',
        consultations: [formData.consultation],
        medicaments: formData.medicament ? [formData.medicament] : [],
        note: formData.note || undefined
      };

      // Ajout via votre service
      this.factureService.addFacture(nouvelleFacture);
      
      // Redirection vers la liste
      this.router.navigate(['/factures']);
    } else {
      this.factureForm.markAllAsTouched();
    }
  }
}