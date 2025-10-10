import { Injectable } from '@angular/core';
import {Medecin as  MedecinModel} from '../models/medecin';

@Injectable({
  providedIn: 'root'
})
export class Medecinservice {
  private medecins: MedecinModel[]=[
    {
      idmedecin:1, 
      nom:'Dupont', 
      prenom:'Jean', 
      specialite:'Cardiologue', 
      telephone:'555-1111', 
      email:''
    },
    {
      idmedecin:2, 
      nom:'Martin',
      prenom:'Sophie',
      specialite:'Dermatologue',
      telephone:'555-2222',
      email:'madara_du_gaz_123@yahoo.com'
    }
  ];
  // methode pour recuperer la liste des medecins
  getMedecins(): MedecinModel[] {return this.medecins; }
  // methode pour ajouter un medecin
  addMedecin(newmedecin: MedecinModel): void {this.medecins.push(newmedecin); }

  getidPatient(id:number): MedecinModel | undefined {
        return this.medecins.find(medecin => medecin.idmedecin === id);
      }
  
  
}
