import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
/*
C'est 3 composants sont necessaire pour la navigation.
RouterModule: c est lui qui initie la navigation , il a le compte de toute les route cree dans l application
Router: c est lui qui permet de naviguer entre les differentes routes
ActivatedRoute: c est lui qui permet de recuperer les parametres de la route active courante , par exemple pour recuperer l id d un patient a partir de l url via le 
*/
import { PatientService } from '../../services/Patient.service'
import { RendezvousService } from '../../services/rendezvous'
import { Factureservice } from '../../services/facture'
import { Patient } from '../../models/patient'
import { RendezVous } from '../../models/rendezvous'
import { Facture } from '../../models/facture'

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.css',
})
export class PatientDetail implements OnInit  {
  patient: Patient | undefined;
  rendezVous: RendezVous[] = [];
  factures: Facture[] = [];
  activeTab: string = 'information';
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private rendezvousService: RendezvousService,
    private factureService: Factureservice
  ) 
  /*
constructor est une methode special qui indique a angular les dependances a injecter. En effet, quand voudr utiliser services
sans constructor , tu aurais tout fait manuellement,.Mais constructor evite tout ca , aini il s'occupe toute les dependance utile a tes services. 
*/{}

ngOnInit(): void{

  this.chargerDonneesPatient();
}

chargerDonneesPatient(): void {
  const patientId = Number(this.route.snapshot.paramMap.get('id'));
  // Number convertir la valeur recuperee en nombre
  // this.route est l instance de ActivatedRoute injectee dans le constructor
  // snapshot represente l etat actuel de la route active
  //paramMap contient une collection de donnees cocernat la route active , tel que les parametres de l url, l'id
  // get('id') permet de recuperer la valeur du parametre id de l url donne par paramMMap 

  if (patientId) {
    // a partir de l'id recuperer je vais charger tout les info concernat le patient
    this.patient = this.patientService.getidpatient(patientId);
    this.rendezVous = this.rendezvousService.getrendezvous_patient(patientId);
    this.factures = this.factureService.getFactureParPatient(patientId);
  }

    this.isLoading = false;
}
changerOnglet(onglet: string): void{
  this.activeTab = onglet;
}
calculerAge(dateNaissance: string): number{
  const naissance = new Date (dateNaissance);
  const today = new Date();
  let age = today.getFullYear() - naissance.getFullYear();

  const mois = today.getMonth() - naissance.getMonth();

  if (mois < 0 || (mois === 0 && today.getDate() < naissance.getDate())){
    age--;
  }
  return age;
  // le if permet de verifier si l'anniverssaire est deja passe cette annee ou pas. si c est non , on soustrait 1 a l'age
}

getDernierRendezVous(): RendezVous | undefined {

  return this.rendezVous.filter(rdv=> new Date(rdv.date)>= new Date() && rdv.statut ==='planifié').sort((a,b)=> new Date(a.date).getTime() - new Date (b.date).getTime())[0];
  // filter permet de filtrer les rendez vous pour ne garder que ceux dont la date est superieur ou egale a la date actuelle et dont le statut est planifié
  // sort permet de trier les rendez vous filtrés par date croissante
  // [0] permet de retourner le premier element du tableau trié, qui correspond au prochain rendez vous
   
}
//apres essaye de comprendre les lignes ci-dessous 
  editerPatient(): void {
    if (this.patient) {
      this.router.navigate(['/patients/editer', this.patient.idpatient]);
    } 
  }

  creerRendezVous(): void {
    if (this.patient) {
      this.router.navigate(['/rendezvous/nouveau'], {
        state: { patientId: this.patient.idpatient }
      });
    }
  }
}