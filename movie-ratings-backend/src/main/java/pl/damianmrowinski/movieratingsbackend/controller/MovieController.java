package pl.damianmrowinski.movieratingsbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.damianmrowinski.movieratingsbackend.domain.MovieEntity;
import pl.damianmrowinski.movieratingsbackend.repository.MovieRepository;

import java.util.Optional;

@RestController
@RequestMapping("/movies")
public class MovieController {

    private final MovieRepository movieRepository;

    public MovieController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @GetMapping
    public Iterable<MovieEntity> findAllMovies() {
        return movieRepository.findAll();
    }

    @GetMapping("/{movieId}")
    public MovieEntity findMovieById(@PathVariable Long movieId) {
        Optional<MovieEntity> optionalMovieEntity = movieRepository.findById(movieId);
        return optionalMovieEntity.orElse(null);
    }
}
