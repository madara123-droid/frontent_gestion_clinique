import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';// il sert a verifier si l'utilisateur est connecte

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // canActive est automatiquement appeler par Angular losque on vet accerde a une route protegr
    if (this.authService.isLoggedIn()) {
      // le bloc sert a verifier si un user est connecte
      return true;
    } else {
      // sinon retourne false et redirige vers la page de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}