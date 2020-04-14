package pl.damianmrowinski.movieratingsbackend.domain.entity.movie;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "movie")
public class MovieEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private Integer year;

    private String director;

    private String country;

    @JsonIgnore
    @OneToMany(mappedBy = "movie")
    private List<RatingEntity> ratings = new ArrayList<>();

    protected MovieEntity() {
    }

    public MovieEntity(String title, String description, Integer year, String director, String country, List<RatingEntity> ratings) {
        this.title = title;
        this.description = description;
        this.year = year;
        this.director = director;
        this.country = country;
        this.ratings = ratings;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Integer getYear() {
        return year;
    }

    public String getDirector() {
        return director;
    }

    public String getCountry() {
        return country;
    }

    public List<RatingEntity> getRatings() {
        return ratings;
    }
}
