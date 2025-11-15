import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  // ÉTAPE 4.1 - Initialisation du formulaire
  loginForm;

  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // ÉTAPE 4.2 - Soumission du formulaire
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.error = '';

      this.authService.login(this.loginForm.value as LoginRequest).subscribe({
        next: () => {
          // Redirection après connexion réussie
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.error = 'Email ou mot de passe incorrect';
          this.loading = false;
          console.error('Erreur de connexion:', error);
        }
      });
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      this.loginForm.markAllAsTouched();
    }
  }

  // ÉTAPE 4.3 - Méthode utilitaire pour les erreurs
  getEmailError(): string {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.errors?.['required'] && emailControl.touched) {
      return 'L\'email est requis';
    }
    if (emailControl?.errors?.['email'] && emailControl.touched) {
      return 'Format d\'email invalide';
    }
    return '';
  }

  getPasswordError(): string {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.errors?.['required'] && passwordControl.touched) {
      return 'Le mot de passe est requis';
    }
    return '';
  }
}