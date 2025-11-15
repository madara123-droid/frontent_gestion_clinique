import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequest, AuthResponse, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; //C'est une variable qui stocke l'URl de ton backend
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  /*
   behaviorsubject est un objet qui a pour but de stocker la dernieres valeur.mais ici sa valeur est user
   il peut emettre des donnnees a  tous les composant abonnes
  */
  public currentUser$ = this.currentUserSubject.asObservable();
  /*
C’est une version publique du comportement précédent…
mais en lecture-seule.

Pourquoi le $ à la fin ?

C’est une convention Angular/RxJS pour dire :
➡️ “Ceci est un Observable.”

🎯 Pourquoi utiliser asObservable() ?

Pour empêcher l’extérieur de modifier l’utilisateur avec .next().

On veut protéger le BehaviorSubject en ne laissant que le service le modifier.  */

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  // ÉTAPE 2.1 - Connexion
  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          // Stockage dans le localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
        })
      );
  }

  // ÉTAPE 2.2 - Déconnexion
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  // ÉTAPE 2.3 - Vérifier si connecté
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // ÉTAPE 2.4 - Récupérer le token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // ÉTAPE 2.5 - Récupérer le rôle
  getUserRole(): string {
    const user = this.currentUserSubject.value;
    return user?.role || '';
  }

  // ÉTAPE 2.6 - Charger l'utilisateur au démarrage
  private loadUserFromStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.currentUserSubject.next(JSON.parse(userData));
    }
  }
}