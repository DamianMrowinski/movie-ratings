package pl.damianmrowinski.movieratingsbackend.app.service.movie;

import org.springframework.stereotype.Service;
import pl.damianmrowinski.movieratingsbackend.app.service.movie.converter.MovieEntityToMovieDetailsDtoConverter;
import pl.damianmrowinski.movieratingsbackend.domain.entity.movie.MovieEntity;
import pl.damianmrowinski.movieratingsbackend.domain.repository.MovieRepository;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDetailsDto;

@Service
class MovieDetailsServiceImpl implements MovieDetailsService {

    private final MovieRepository movieRepository;
    private final MovieEntityToMovieDetailsDtoConverter movieEntityToMovieDetailsDtoConverter;

    public MovieDetailsServiceImpl(MovieRepository movieRepository,
                                   MovieEntityToMovieDetailsDtoConverter movieEntityToMovieDetailsDtoConverter) {
        this.movieRepository = movieRepository;
        this.movieEntityToMovieDetailsDtoConverter = movieEntityToMovieDetailsDtoConverter;
    }

    @Override
    public MovieDetailsDto findById(Long movieId) {
        MovieEntity movie = movieRepository.getOne(movieId);
        return movieEntityToMovieDetailsDtoConverter.convert(movie);
    }
}
