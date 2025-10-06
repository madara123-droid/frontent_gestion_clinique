import java.util.Date;
import java.util.List;

public class Patient {
    private int idPatient;
    private String nom;
    private String prenom;
    private Date dateNaissance;
    private Coordonnees coordonnees;
    private List<String> antecedents;
    private DossierPatient dossier;
    private List<RendezVous> rendezVousList;
    private List<Hospitalisation> hospitalisations;

    public void consulterDossier() {
        // Implémentation
    }
}