public class Facture {
    private int idFacture;
    private double montant;
    private String statut;

    public void payer() {
        this.statut = "Payée";
    }
}