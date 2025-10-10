// ===============================
// 🔹 IMPORTATIONS DES OUTILS ANGULAR
// ===============================
import { Component } from '@angular/core';        // Permet de déclarer une classe comme composant Angular
import { CommonModule } from '@angular/common';   // Donne accès aux directives de base (*ngIf, *ngFor, etc.)
import { RouterModule } from '@angular/router';   // Permet d’utiliser la navigation (routerLink, router-outlet, etc.)

// ===============================
// 🔹 DÉFINITION DU COMPOSANT
// ===============================
@Component({
  selector: 'app-accueil',                        // Nom de la balise HTML qui représentera ce composant : <app-accueil>
  standalone: true,                               // Indique que ce composant est autonome (pas besoin d’un module)
  imports: [CommonModule, RouterModule],          // Permet d’utiliser les directives et outils de ces modules
  templateUrl: './accueil.html',        // Lien vers le fichier HTML (la structure visuelle de la page)
  styleUrls: ['./accueil.css']          // Lien vers le fichier CSS (le style de cette page)
})

// ===============================
// 🔹 CLASSE DU COMPOSANT
// ===============================
export class AccueilComponent {
  // Données fictives qui seront affichées dans la page
  // (Elles seront remplacées plus tard par de vraies données venant d’un service)
  stats = {
    patients: 156,                // Nombre total de patients
    medecins: 24,                 // Nombre total de médecins
    rendezVousAujourdhui: 18      // Nombre de rendez-vous prévus aujourd’hui
  };
}
