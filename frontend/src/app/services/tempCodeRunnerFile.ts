import { Injectable } from '@angular/core';
import { RendezVous as  RendezvousModel} from '../models/rendezvous';
@Injectable({
  providedIn: 'root'
})
export class Rendezvous {
  private rendezvous: RendezvousModel[]=[
    {
      idRDV: 1,
      date: new Date('2024-10-15'),
      heure: '09:00',
      patientId: 1,
      medecinId: 1,
      patientNom: 'John Doe',
      medecinNom: 'Dr Bernard',
      statut: 'confirmé',
      motif: 'Consultation générale',
      duree: 30
  },
  {
idRDV: 2,
      date: new Date('2024-10-15'),
      heure: '10:30',
      patientId: 2,
      medecinId: 2,
      patientNom: 'Jane Smith',
      medecinNom: 'Dr Moreau',
      statut: 'planifié',
      motif: 'Suivi pédiatrique',
      duree: 45  }     

  
  ];
  // methode pour recuperer la liste des rendezvous
  getrendezvous(): RendezvousModel[] 
    {
      return this.rendezvous; 
    }
  // methode pour recuperer un rendezvous par medecin
  getrendezvous_medecin(medecinId:number):RendezvousModel[]
    {
      return this.rendezvous.filter(rdv=> rdv.medecinId === medecinId);
    }
  // methode pour recuperer un rendezvous par patient
  getrendezvous_patient(nb:number):RendezvousModel[]
    {
      return this.rendezvous.filter(rdv=> rdv.patientId === nb);
    }


  // methode pour ajouter un rendezvous
  addrendezvous(newrendezvous: RendezvousModel): void 
    {
      this.rendezvous.push(newrendezvous); 

    }

  
}