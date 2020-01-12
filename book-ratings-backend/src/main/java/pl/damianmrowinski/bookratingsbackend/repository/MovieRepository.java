package pl.damianmrowinski.bookratingsbackend.repository;

import org.springframework.data.repository.CrudRepository;
import pl.damianmrowinski.bookratingsbackend.domain.MovieEntity;

public interface MovieRepository extends CrudRepository<MovieEntity, Long> {

}
