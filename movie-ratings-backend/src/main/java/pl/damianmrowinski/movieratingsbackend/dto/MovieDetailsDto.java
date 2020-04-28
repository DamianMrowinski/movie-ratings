package pl.damianmrowinski.movieratingsbackend.dto;

public class MovieDetailsDto {

    private final Long id;
    private final String title;
    private final String description;
    private final Integer year;
    private final String director;
    private final String country;

    public MovieDetailsDto(Long id,
                           String title,
                           String description,
                           Integer year,
                           String director,
                           String country) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.year = year;
        this.director = director;
        this.country = country;
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
}
