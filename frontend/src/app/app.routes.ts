// dans ce fichier je defini les route de mes composants, c'est comme ci je cree une route qui va de mes composant a l'autoroute ou tout le traffic se passe 

import { Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list';
import { MedecinListComponent } from './components/medecin/medecin-list/medecin-list';
import { AccueilComponent } from './components/acceuil/accueil';
import { RendezVousListComponnent } from './components/rendez-vous-list/rendez-vous-list';
import { RendezVousFormComponent } from './components/rendez-vous-form/rendez-vous-form';
import { PatientFormComponent } from './components/patient-form/patient-form';
import { FactureListComponent } from './components/facture-list/facture-list';
import { PatientDetailComponent } from './components/patient-detail/patient-detail';
export const routes: Routes = [
  
  {path: 'patients/:id', component: PatientDetailComponent},
  {path: 'factures', component: FactureListComponent},
 {path: '', component:AccueilComponent},
  { path: 'rend', component: RendezVousFormComponent }, 
  { path: 'pat', component: PatientFormComponent },
 {path: 'rendezvous', component: RendezVousListComponnent},
  { path: 'patients', component: PatientListComponent },
  { path: 'medecins', component: MedecinListComponent },
  { path: '**', redirectTo: '' } // le ** corespond a toute les routes non definie, ici on redirige vers l'accueil losque la route d'une page n'est pas trouve 
];
