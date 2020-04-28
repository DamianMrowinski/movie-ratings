package pl.damianmrowinski.movieratingsbackend.app.service.movie;

import org.springframework.transaction.annotation.Transactional;
import pl.damianmrowinski.movieratingsbackend.dto.MovieDetailsDto;

public interface MovieDetailsService {

    @Transactional
    MovieDetailsDto findById(Long movieId);

}
