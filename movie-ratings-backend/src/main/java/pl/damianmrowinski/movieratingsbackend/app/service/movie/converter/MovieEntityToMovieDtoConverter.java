package pl.damianmrowinski.movieratingsbackend.app.service.movie.converter;

import pl.damianmrowinski.movieratingsbackend.domain.entity.movie.MovieEntity;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDto;

public interface MovieEntityToMovieDtoConverter {

    MovieDto convert(MovieEntity movie);

}
