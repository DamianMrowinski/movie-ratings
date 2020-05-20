package pl.damianmrowinski.movieratingsbackend.dto;

public class MovieDetailsDto {

    private final Long id;
    private final String title;
    private final String description;
    private final Integer year;
    private final String director;
    private final String country;
    private final String imgUrl;

    public MovieDetailsDto(Long id,
                           String title,
                           String description,
                           Integer year,
                           String director,
                           String country,
                           String imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.year = year;
        this.director = director;
        this.country = country;
        this.imgUrl = imgUrl;
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

    public String getImgUrl() {
        return imgUrl;
    }
}
