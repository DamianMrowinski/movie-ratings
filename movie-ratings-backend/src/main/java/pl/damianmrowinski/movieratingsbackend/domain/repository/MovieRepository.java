package pl.damianmrowinski.movieratingsbackend.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.damianmrowinski.movieratingsbackend.domain.entity.movie.MovieEntity;

public interface MovieRepository extends JpaRepository<MovieEntity, Long> {

}
