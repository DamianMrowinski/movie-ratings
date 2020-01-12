package pl.damianmrowinski.bookratingsbackend.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "movie")
public class MovieEntity {

    @Id
    private Long id;

    private String title;

    protected MovieEntity() {
    }

    public MovieEntity(String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
