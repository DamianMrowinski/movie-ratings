package pl.damianmrowinski.movieratingsbackend.rest.controller;

import org.springframework.web.bind.annotation.*;
import pl.damianmrowinski.movieratingsbackend.app.service.movie.MovieListService;
import pl.damianmrowinski.movieratingsbackend.domain.entity.movie.MovieEntity;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDto;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/movies")
public class MovieController {

    private MovieListService movieListService;

    public MovieController(MovieListService movieListService) {
        this.movieListService = movieListService;
    }

    @GetMapping
    public List<MovieDto> findAllMovies() {
        return movieListService.findAllMovies();
    }

    @GetMapping("/{movieId}")
    public MovieEntity findMovieById(@PathVariable Long movieId) {
        return null;
    }
}
