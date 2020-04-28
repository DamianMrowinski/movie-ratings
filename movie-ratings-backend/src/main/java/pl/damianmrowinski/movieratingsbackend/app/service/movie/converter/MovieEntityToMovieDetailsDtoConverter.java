package pl.damianmrowinski.movieratingsbackend.app.service.movie.converter;

import pl.damianmrowinski.movieratingsbackend.domain.entity.movie.MovieEntity;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDetailsDto;

public interface MovieEntityToMovieDetailsDtoConverter {

    MovieDetailsDto convert(MovieEntity movie);

}
