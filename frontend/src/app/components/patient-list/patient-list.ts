// On importe les outils nécessaires depuis Angular
import { Component, OnInit } from '@angular/core'; 
// --> Component : pour créer un composant Angular
// --> OnInit : interface qui permet d’utiliser la méthode ngOnInit()

// On importe les outils utiles pour le template (ngIf, ngFor, DatePipe)
import { CommonModule, DatePipe } from '@angular/common'; 

// On importe le service Patientservice (qui gère les données des patients)
import { PatientService } from '../../services/Patient.service';

// On importe le modèle Patient (la structure d’un patient)
import { Patient } from '../../models/patient';

// ===============================
//  DÉFINITION DU COMPOSANT
// ===============================
@Component({
  selector: 'app-patient-list',        // Nom de la balise HTML du composant
  standalone: true,                    // ✅ Indique que ce composant est autonome
  imports: [CommonModule, DatePipe],   // ✅ Permet d'utiliser *ngIf, *ngFor et |date dans le HTML
  templateUrl: './patient-list.html',  // Lien vers le fichier HTML du composant (vue)
  styleUrls: ['./patient-list.css']    // ✅ attention : c’est "styleUrls" avec un "s"
})

// ===============================
//  CLASSE DU COMPOSANT
// ===============================
export class PatientListComponent implements OnInit {
  // Déclaration d’une liste de patients vide au départ
  patients: Patient[] = [];

  // Le constructeur permet d'injecter le service Patientservice
  constructor(private patientService: PatientService) {}

  // ngOnInit() est appelée automatiquement au démarrage du composant
  ngOnInit(): void {
    this.chargerPatients(); // On charge les patients dès que le composant s’affiche
  }

  // Méthode pour récupérer la liste des patients via le service
  chargerPatients(): void {
    this.patients = this.patientService.getpatient(); 
    // --> On appelle la méthode getpatient() du service
    // --> Elle renvoie les patients, qu’on stocke dans la variable locale "patients"
  }
}
