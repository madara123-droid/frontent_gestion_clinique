export interface User {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  role: 'medecin' | 'administrateur' | 'secretaire';
  isActive: boolean;
}//creer un typage pour definir les users

export interface LoginRequest {
  email: string;
  password: string;
}// creer un typage pour definir les requetes de login

export interface AuthResponse {
  token: string;
  user: User;
}// creer un typage pour definir les reponses d'authentification