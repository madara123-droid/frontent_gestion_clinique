import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, LoginRequest, AuthResponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // Utilisateurs prédéfinis pour la démo
  private readonly users: User[] = [
    {
      id: 1,
      email: 'medecin@clinique.com',
      nom: 'Docteur',
      prenom: 'Martin',
      role: 'medecin',
      isActive: true
    },
    {
      id: 2,
      email: 'admin@clinique.com',
      nom: 'Administrateur',
      prenom: 'System',
      role: 'administrateur',
      isActive: true
    },
    {
      id: 3,
      email: 'secretaire@clinique.com',
      nom: 'Secrétaire',
      prenom: 'Dupont',
      role: 'secretaire',
      isActive: true
    }
  ];

  constructor() {
    this.loadUserFromStorage();
  }

  // Connexion sans backend
  login(credentials: LoginRequest): Observable<AuthResponse> {
    // Simulation d'un délai réseau
    return new Observable(observer => {
      setTimeout(() => {
        const user = this.users.find(u => 
          u.email === credentials.email && 
          this.getDefaultPassword(credentials.email) === credentials.password
        );

        if (user) {
          const response: AuthResponse = {
            token: this.generateToken(user),
            user: user
          };
          
          // Stockage dans le localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
          
          observer.next(response);
          observer.complete();
        } else {
          observer.error(new Error('Email ou mot de passe incorrect'));
        }
      }, 1000); // Délai de 1 seconde pour simuler une requête réseau
    });
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  // Vérifier si connecté
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Récupérer le token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Récupérer le rôle
  getUserRole(): string {
    const user = this.currentUserSubject.value;
    return user?.role || '';
  }

  // Charger l'utilisateur au démarrage
  private loadUserFromStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.currentUserSubject.next(JSON.parse(userData));
    }
  }

  // Mot de passe par défaut basé sur l'email
  private getDefaultPassword(email: string): string {
    return 'password123'; // Mot de passe unique pour tous les utilisateurs de démo
  }

  // Générer un token simple
  private generateToken(user: User): string {
    return btoa(JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role,
      timestamp: Date.now()
    }));
  }

  // Méthode pour réinitialiser le mot de passe (optionnel)
  resetPassword(email: string): Observable<boolean> {
    return of(this.users.some(u => u.email === email));
  }
}