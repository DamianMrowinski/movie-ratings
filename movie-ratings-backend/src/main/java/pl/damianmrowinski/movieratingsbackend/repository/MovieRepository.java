package pl.damianmrowinski.movieratingsbackend.repository;

import org.springframework.data.repository.CrudRepository;
import pl.damianmrowinski.movieratingsbackend.domain.MovieEntity;

public interface MovieRepository extends CrudRepository<MovieEntity, Long> {

}
