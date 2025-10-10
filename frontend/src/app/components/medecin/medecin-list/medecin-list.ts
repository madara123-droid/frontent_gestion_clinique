import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Medecinservice } from '../../../services/medecin';
import { Medecin } from '../../../models/medecin';

@Component({
  selector: 'app-medecin-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medecin-list.html',
  styleUrl: './medecin-list.css'
})
export class MedecinListComponent implements OnInit {

  medecins: Medecin[] = [];
  
  constructor(private medecinService: Medecinservice) {}
  ngOnInit(): void{
    this.chargerMedecin();
  }
  chargerMedecin(): void {
    this.medecins= this.medecinService.getMedecins();
  }

}
