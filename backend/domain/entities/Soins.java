import java.util.Date;

public class Soins {
    private int idSoin;
    private String description;
    private Date date;
    private boolean validation;

    public void validerSoin() {
        this.validation = true;
    }
}