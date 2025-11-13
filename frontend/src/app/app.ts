import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list';
import { MedecinListComponent } from './components/medecin/medecin-list/medecin-list';

@Component({
  selector: 'app-root',
  standalone: true, // ❗ Important : c’est un standalone component
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    PatientListComponent,
    MedecinListComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ❗ "styleUrls" (pluriel) et non "styleUrl"
})
export class AppComponent {
  title = 'frontend';
}
