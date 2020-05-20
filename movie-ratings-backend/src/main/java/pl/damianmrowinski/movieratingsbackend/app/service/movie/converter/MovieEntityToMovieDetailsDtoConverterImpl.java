package pl.damianmrowinski.movieratingsbackend.app.service.movie.converter;

import org.springframework.stereotype.Component;
import pl.damianmrowinski.movieratingsbackend.domain.entity.movie.MovieEntity;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDetailsDto;

@Component
class MovieEntityToMovieDetailsDtoConverterImpl implements MovieEntityToMovieDetailsDtoConverter {

    @Override
    public MovieDetailsDto convert(MovieEntity movie) {
        return new MovieDetailsDto(
                movie.getId(),
                movie.getTitle(),
                movie.getDescription(),
                movie.getYear(),
                movie.getDirector(),
                movie.getCountry(),
                movie.getImgUrl()
        );
    }
}
