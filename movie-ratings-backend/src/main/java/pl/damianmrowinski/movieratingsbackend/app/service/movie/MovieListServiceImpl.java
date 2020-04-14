package pl.damianmrowinski.movieratingsbackend.app.service.movie;

import org.springframework.stereotype.Service;
import pl.damianmrowinski.movieratingsbackend.app.service.movie.converter.MovieEntityToMovieDtoConverter;
import pl.damianmrowinski.movieratingsbackend.domain.entity.movie.MovieEntity;
import pl.damianmrowinski.movieratingsbackend.domain.repository.MovieRepository;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDto;

import java.util.List;
import java.util.stream.Collectors;

@Service
class MovieListServiceImpl implements MovieListService {

    private final MovieRepository movieRepository;
    private final MovieEntityToMovieDtoConverter movieEntityToMovieDtoConverter;

    public MovieListServiceImpl(MovieRepository movieRepository,
                                MovieEntityToMovieDtoConverter movieEntityToMovieDtoConverter) {
        this.movieRepository = movieRepository;
        this.movieEntityToMovieDtoConverter = movieEntityToMovieDtoConverter;
    }

    @Override
    public List<MovieDto> findAllMovies() {
        List<MovieEntity> movies = movieRepository.findAll();

        return movies.stream()
                .map(movieEntityToMovieDtoConverter::convert)
                .collect(Collectors.toList());
    }

}
