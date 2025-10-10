// Importation des outils nécessaires pour les tests
import { TestBed } from '@angular/core/testing';  // ⚡️ Outil principal de test Angular
import { Medecin } from './medecin';             // 👨‍⚕️ Service Medecin à tester

// 📦 Bloc principal de tests pour le service Medecin
describe('Medecin', () => {
  let service: Medecin;  // 🔧 Déclaration de la variable qui contiendra le service

  // 🔄 Configuration avant chaque test
  beforeEach(() => {
    // Prépare l'environnement de test
    TestBed.configureTestingModule({});
    // Crée une nouvelle instance du service
    service = TestBed.inject(Medecin);
  });

  // ✅ Premier test : vérifie si le service est créé
  it('should be created', () => {
    expect(service).toBeTruthy();  // Vérifie que le service existe
  });
});
