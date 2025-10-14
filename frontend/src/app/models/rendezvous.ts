export interface RendezVous {
  idRDV: number;
  date: Date;
  heure: string;
  patientId: number;
  medecinId: number;
  patientNom?: string;    // Pour l'affichage
  medecinNom?: string;    // Pour l'affichage
  statut: 'planifié' | 'confirmé' | 'annulé' | 'terminé';
  motif: string;
  duree: number;          // Durée en minutes
}