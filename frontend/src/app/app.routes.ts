import { Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list';
import { MedecinListComponent } from './components/medecin/medecin-list/medecin-list';
import { AccueilComponent } from './components/acceuil/accueil';

export const routes: Routes = [
    {path: '', component:AccueilComponent},
  { path: 'patients', component: PatientListComponent },
  { path: 'medecins', component: MedecinListComponent },
  { path: '**', redirectTo: '' } // Page par défaut
];