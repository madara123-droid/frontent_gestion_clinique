public abstract class Employe {
    protected int idEmploye;
    protected String nom;
    protected String prenom;
    protected String contrat;
    protected double salaire;

    public Employe(int idEmploye, String nom, String prenom) {
        this.idEmploye = idEmploye;
        this.nom = nom;
        this.prenom = prenom;
    }

    // Getters et Setters
    public int getIdEmploye() { return idEmploye; }
    public String getNom() { return nom; }
    public String getPrenom() { return prenom; }
    public String getContrat() { return contrat; }
    public double getSalaire() { return salaire; }
}