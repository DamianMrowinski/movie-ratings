package pl.damianmrowinski.movieratingsbackend.app.service.movie;

import org.springframework.transaction.annotation.Transactional;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDto;

import java.util.List;

public interface MovieListService {

    @Transactional
    List<MovieDto> findAllMovies();

}
