import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Movie} from '../model/movie';
import {MovieDataService} from '../service/data/movie-data.service';
import {Observable} from 'rxjs';
import {PAGES} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolverService implements Resolve<Movie> {

  constructor(private movieDataService: MovieDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> | Promise<Movie> | Movie {
    const id = route.paramMap.get(PAGES.MOVIE_ID_PARAMETER);
    return this.movieDataService.getMovieDetails$(+id);
  }
}
