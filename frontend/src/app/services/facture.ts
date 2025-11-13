import { Injectable } from '@angular/core';
import {Facture} from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class Factureservice {
  private factures: Facture[] = [
      {
      idFacture: 1,
      patientId: 1,
      patientNom: 'John Doe',
      dateCreation: new Date('2024-10-01'),
      montant: 85.50,
      statut: 'payée',
      consultations: ['Consultation générale', 'Examen sanguin'],
      medicaments: ['Paracétamol', 'Vitamine C'],
      note: 'Patient régulier'
    },
     
   {
      idFacture: 2,
      patientId: 2,
      patientNom: 'Jane Smith',
      dateCreation: new Date('2024-10-05'),
      montant: 120.00,
      statut: 'en attente',
      consultations: ['Consultation pédiatrique', 'Vaccination'],
      medicaments:['Ibuprofène'],
      note: 'Première visite'
    },     
     {
      idFacture: 3,
      patientId: 1,
      patientNom: 'John Doe',
      dateCreation: new Date('2024-10-10'),
      montant: 45.00,
      statut: 'en retard',
      consultations: ['Suivi médical'],
      medicaments: ['Antibiotiques']
    }
  ]

  getfactures():Facture[] {
    return this.factures;
  }

  getFactureParPatient(id:number): Facture[]{
    return this.factures.filter(nb=>nb.patientId === id );
  }
  getFactureParId(id:number):Facture[]{
    return this.factures.filter(nb=>nb.idFacture === id)
  }
  addFacture(newFacture:Facture):void{
    newFacture.idFacture = Math.max(...this.factures.map(f=>f.idFacture))+1
    // Math.max:donne le max
    //map parcour et cree un new table de FactureId
    // ...: depile le tableau d'element en une liste d'elemement exploitatble 
    this.factures.push(newFacture);
  }
  updateFacture(factureId:number,newStatut:Facture['statut']):void{
    const facture = this.factures.find(f=>f.idFacture===factureId)
    if(facture){
      facture.statut=newStatut;
    }
  }
   genererFactureConsultation(patientId: number, patientNom: string, consultations: string[], montant: number,medoc:string[]): Facture {
    const aujourdhui = new Date();//  c est ainsi que on declare un type date en typescript
    // quand tu applique setDAte a un type date , tu lui accorde une date entre en entree
    return {
      idFacture: 0, // Sera généré par ajouterFacture
      patientId,
      patientNom,
      dateCreation: aujourdhui,
      montant,
      statut: 'en attente',
      consultations,
      medicaments:medoc,
      note: 'Facture générée automatiquement'
    };
  }
  
}
