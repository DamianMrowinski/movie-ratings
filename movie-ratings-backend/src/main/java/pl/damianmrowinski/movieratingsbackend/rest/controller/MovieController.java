package pl.damianmrowinski.movieratingsbackend.rest.controller;

import org.springframework.web.bind.annotation.*;
import pl.damianmrowinski.movieratingsbackend.app.service.movie.MovieDetailsService;
import pl.damianmrowinski.movieratingsbackend.app.service.movie.MovieListService;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDetailsDto;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDto;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/movies")
public class MovieController {

    private final MovieListService movieListService;
    private final MovieDetailsService movieDetailsService;

    public MovieController(MovieListService movieListService,
                           MovieDetailsService movieDetailsService) {
        this.movieListService = movieListService;
        this.movieDetailsService = movieDetailsService;
    }

    @GetMapping
    public List<MovieDto> findAllMovies() {
        return movieListService.findAllMovies();
    }

    @GetMapping("/{movieId}")
    public MovieDetailsDto findMovieById(@PathVariable Long movieId) {
        return movieDetailsService.findById(movieId);
    }
}
