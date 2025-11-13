import { Component,OnInit } from '@angular/core';
import{ CommonModule } from '@angular/common'
/*
cette ligne en dessus permet de d utiliser ngIF,ngFor,ngSwitch
*/
import{ RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import {Factureservice} from '../../services/facture'
import {Facture} from '../../models/facture'
@Component({
  selector: 'app-facture-list',
  standalone: true,// dit au systeme que le composant agit independament
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './facture-list.html',
  styleUrl: './facture-list.css',
})
export class FactureListComponent implements OnInit {
   
  factures: Facture[] = [];// contient toute les factures,cela sera utilise dans la reprensation statique
  filtreStatut: string = 'tous';
  totalEnAttente: number = 0;// pour regrouper l'argent dus factures en attente,cela sera utilise dans la reprensation statique
  totalPaye: number = 0;

  constructor( private factureService: Factureservice) {}
  ngOnInit(): void {
    this.chargerFactures();
    this.calculerTotaux();
  }
  chargerFactures(): void {
    this.factures =this.factureService.getfactures()
}
  calculerTotaux(): void{
    this.totalEnAttente = this.factures.filter(f=>f.statut==='en attente').reduce((acc, facture)=> acc + facture.montant,0);
         //.reduce() sert à réduire (ou accumuler) tous les éléments d’un tableau en une seule valeur.

    this.totalPaye = this.factures.filter(f=>f.statut==='payée').reduce((acc,f)=> acc + f.montant,0);

  }
// la fonction ci-dessous permet de filtrer les factures selon leur statut
  getFacturesFiltrees(): Facture[] {
    if (this.filtreStatut === 'tous') {
      return this.factures;
    }
    return this.factures.filter(f => f.statut === this.filtreStatut);
  }

  getStatutClass(statut: string): string {
    switch(statut) {
      case 'payée': return 'statut-payee';
      case 'en attente': return 'statut-attente';
      case 'en retard': return 'statut-retard';
      case 'annulée': return 'statut-annulee';
      default: return 'statut-default';
    }
  }

  marquerCommePayee(idFacture: number): void {
    this.factureService.updateFacture(idFacture, 'payée');
    this.chargerFactures();
    this.calculerTotaux();
  }

  getTotalFactures(): number {
    return this.factures.reduce((total, f) => total + f.montant, 0);
  }
}
