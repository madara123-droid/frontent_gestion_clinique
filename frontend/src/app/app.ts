import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

// Import du service d'authentification
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
    // ❗ Supprimez PatientListComponent et MedecinListComponent 
    // car ils sont chargés via le router, pas directement ici
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Gestion Clinique';

  // Injection du service d'authentification
  constructor(public authService: AuthService) {}
}