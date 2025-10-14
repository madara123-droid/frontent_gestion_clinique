// dans ce fichier je defini les route de mes composants, c'est comme ci je cree une route qui va de mes composant a l'autoroute ou tout le traffic se passe 

import { Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list';
import { MedecinListComponent } from './components/medecin/medecin-list/medecin-list';
import { AccueilComponent } from './components/acceuil/accueil';
import { RendezVousListComponnent } from './components/rendez-vous-list/rendez-vous-list';

export const routes: Routes = [
 {path: '', component:AccueilComponent},
 {path: 'rendezvous', component: RendezVousListComponnent},
  { path: 'patients', component: PatientListComponent },
  { path: 'medecins', component: MedecinListComponent },
  { path: '**', redirectTo: '' } // le ** corespond a toute les routes non definie, ici on redirige vers l'accueil losque la route d'une page n'est pas trouve 
];
