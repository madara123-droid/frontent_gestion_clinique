// Import des modules et services nécessaires
import { Component, OnInit } from '@angular/core'; // Component = pour créer le composant, OnInit = cycle de vie
import { CommonModule } from '@angular/common';    // Contient directives Angular comme *ngIf et *ngFor
import { FormsModule } from '@angular/forms';      // Permet d'utiliser ngModel pour le formulaire
import { Router } from '@angular/router';          // Pour naviguer entre les pages
import { RendezvousService } from '../../services/rendezvous'; // Service pour gérer les rendez-vous
import { PatientService } from '../../services/Patient.service';        // Service pour gérer les patients
import { Medecinservice } from '../../services/medecin';       // Service pour gérer les médecins
import { RendezVous } from '../../models/rendezvous';          // Modèle de données RendezVous
import { Patient } from '../../models/patient';                // Modèle de données Patient
import { Medecin } from '../../models/medecin';                // Modèle de données Médecin

// Définition du composant
@Component({
  selector: 'app-rendez-vous-form',                 // Balise HTML pour utiliser ce composant
  standalone: true,                                // Composant autonome (Angular 15+)
  imports: [CommonModule, FormsModule],           // Modules utilisés dans le template
  templateUrl: './rendez-vous-form.html', // Fichier HTML associé
  styleUrls: ['./rendez-vous-form.css']   // Fichier CSS associé
})
export class RendezVousFormComponent implements OnInit {
  
  // Objet pour stocker les valeurs du nouveau rendez-vous
  // Partial<RendezVous> signifie que toutes les propriétés ne sont pas obligatoires au départ
  nouveauRendezVous: Partial<RendezVous> = {
    date: new Date(),      // Valeur par défaut = aujourd'hui
    heure: '09:00',        // Heure par défaut
    statut: 'planifié',    // Statut initial
    motif: '',             // Motif vide au départ
    duree: 30              // Durée par défaut = 30 minutes
  };

  // Listes pour les dropdowns dans le formulaire
  patients: Patient[] = [];
  medecins: Medecin[] = [];
  heuresDisponibles: string[] = [];

  // Injection des services et du routeur
  constructor(
    private rendezVousService: RendezvousService,
    private patientService: PatientService,
    private medecinService: Medecinservice,
    private router: Router
  ) {}

  // Méthode exécutée automatiquement au démarrage du composant
  ngOnInit(): void {
    this.chargerPatients();          // Remplir la liste des patients
    this.chargerMedecins();          // Remplir la liste des médecins
    this.genererHeuresDisponibles(); // Générer les créneaux horaires
  }

  // Charge les patients depuis le service
  chargerPatients(): void {
    this.patients = this.patientService.getpatient();
  }

  // Charge les médecins depuis le service
  chargerMedecins(): void {
    this.medecins = this.medecinService.getMedecins();
  }

  // Génère des créneaux horaires de 30 minutes entre 8h et 18h
  genererHeuresDisponibles(): void {
    this.heuresDisponibles = [];
    for (let heure = 8; heure <= 18; heure++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const heureStr = heure.toString().padStart(2, '0');  // Exemple : 8 => "08"
        const minuteStr = minute.toString().padStart(2, '0');// Exemple : 0 => "00"
        this.heuresDisponibles.push(`${heureStr}:${minuteStr}`);
      }
    }
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    // Vérifie que patientId et medecinId ont été sélectionnés
    if (this.nouveauRendezVous.patientId && this.nouveauRendezVous.medecinId) {

      // Récupère le nom du patient pour l'affichage
      const patient = this.patients.find(p => p.idpatient === this.nouveauRendezVous.patientId);
      // Récupère le nom du médecin pour l'affichage
      const medecin = this.medecins.find(m => m.idmedecin === this.nouveauRendezVous.medecinId);
      
      // Crée un objet complet pour le rendez-vous avec les noms
      const rendezVousComplet: RendezVous = {
        ...this.nouveauRendezVous as RendezVous,  // Copie les données du formulaire
        patientNom: patient ? `${patient.prenom} ${patient.nom}` : '',
        medecinNom: medecin ? `Dr ${medecin.prenom} ${medecin.nom}` : ''
      };

      // Ajoute le rendez-vous via le service
      this.rendezVousService.addrendezvous(rendezVousComplet);
      // Redirige vers la liste des rendez-vous
      this.router.navigate(['/rendezvous']);
    }
  }

  // Annule la création et retourne à la liste
  annuler(): void {
    this.router.navigate(['/rendezvous']);
  }
}
