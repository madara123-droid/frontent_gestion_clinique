import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  // Uniquement le compte secrétaire
  demoAccounts = [
    { email: 'secretaire@clinique.com', password: 'password123', role: 'Secrétaire Médicale' }
  ];

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
  
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.error = '';

      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.error = 'Email ou mot de passe incorrect';
          this.loading = false;
          console.error('Erreur de connexion:', error);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  // Remplir automatiquement avec le compte secrétaire
  fillDemoAccount(account: any): void {
    this.loginForm.patchValue({
      email: account.email,
      password: account.password
    });
    this.error = '';
  }

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