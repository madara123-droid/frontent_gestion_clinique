import java.util.Date;

public class Hospitalisation {
    private int idHospit;
    private Date dateEntree;
    private Date dateSortie;
    private Chambre chambre;

    public void attribuerLit(Chambre chambre) {
        this.chambre = chambre;
    }
}