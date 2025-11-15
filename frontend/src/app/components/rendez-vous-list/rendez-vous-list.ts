import { CommonModule,DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../../services/rendezvous';
import { RouterModule } from '@angular/router';
import { RendezVous as RendezvousModel } from '../../models/rendezvous';

@Component({
  selector: 'app-rendez-vous-list',
  standalone: true,
  imports: [CommonModule,DatePipe,RouterModule],
  templateUrl: './rendez-vous-list.html',
  styleUrl: './rendez-vous-list.css'
})
export class RendezVousListComponnent implements OnInit {
  rendezvous: RendezvousModel[] = [];

  constructor(private rendezvousfService: RendezvousService) {}

  ngOnInit(): void {
    this.chargerRendezVous();
  }

  chargerRendezVous(): void {
    this.rendezvous = this.rendezvousfService.getrendezvous();
  }

  annulerRendezVous(idrendezvous: number): void {
    this.rendezvousfService.annulerRendezvous(idrendezvous);
    this.chargerRendezVous(); // Recharger la liste après l'annulation
  }


  getStatutClass(statut: string): string {
    switch(statut) {
      case 'confirmé': return 'statut-confirme';
      case 'planifié': return 'statut-planifie';
      case 'annulé': return 'statut-annule';
      case 'terminé': return 'statut-termine';
      default: return 'statut-default';
    }
  }

  

}
