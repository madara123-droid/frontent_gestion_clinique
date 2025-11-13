export interface Facture {
    idFacture: number;
    patientId: number;
    patientNom: string;
    dateCreation: Date;
    montant: number;
    statut: 'en attente' | 'payée' | 'annulée' | 'en retard';
    consultations: string [];//listes de consultation, cela garantie le fait de ne pas cree plusieurs facture pour un client
    medicaments: string [];//lsite des  medicaments
    note?: string;
}
