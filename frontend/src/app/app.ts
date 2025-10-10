import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list';
import { MedecinListComponent } from './components/medecin/medecin-list/medecin-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],  // ✅ Ajouté PatientListComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'frontend';
}