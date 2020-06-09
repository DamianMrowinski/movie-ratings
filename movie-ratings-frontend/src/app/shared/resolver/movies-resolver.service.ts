import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Movie} from '../model/movie';
import {Observable} from 'rxjs';
import {MovieDataService} from '../service/data/movie-data.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService implements Resolve<Movie[]> {

  constructor(private movieDataService: MovieDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> | Promise<Movie[]> | Movie[] {
    return this.movieDataService.getMovies$();
  }
}
