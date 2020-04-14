package pl.damianmrowinski.movieratingsbackend.dto;

public class MovieDto {

    private final Long id;
    private final String title;
    private final Integer year;

    public MovieDto(Long id, String title, Integer year) {
        this.id = id;
        this.title = title;
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Integer getYear() {
        return year;
    }
}