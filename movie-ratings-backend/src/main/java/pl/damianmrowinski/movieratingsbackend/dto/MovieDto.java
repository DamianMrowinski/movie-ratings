package pl.damianmrowinski.movieratingsbackend.dto;

public class MovieDto {

    private final Long id;
    private final String title;
    private final Integer year;
    private final String img;

    public MovieDto(Long id,
                    String title,
                    Integer year,
                    String img) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.img = img;
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

    public String getImg() {
        return img;
    }
}