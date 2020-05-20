package pl.damianmrowinski.movieratingsbackend.app.service.movie.converter;

import org.springframework.stereotype.Component;
import pl.damianmrowinski.movieratingsbackend.domain.entity.movie.MovieEntity;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDto;

@Component
class MovieEntityToMovieDtoConverterImpl implements MovieEntityToMovieDtoConverter {

    @Override
    public MovieDto convert(MovieEntity movie) {
        return new MovieDto(
                movie.getId(),
                movie.getTitle(),
                movie.getYear(),
                movie.getImgUrl()
        );
    }
}
