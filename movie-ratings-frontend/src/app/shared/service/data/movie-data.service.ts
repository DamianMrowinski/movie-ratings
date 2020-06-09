import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../model/movie';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {API_SERVICE} from '../../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {

  constructor(private http: HttpClient) {
  }

  getMovies$(): Observable<Movie[]> {
    const url = `${environment.apiUrl}${API_SERVICE.MOVIES}`;
    return this.http.get<Movie[]>(url);
  }

  getMovieDetails$(movieId: number): Observable<Movie> {
    const url = `${environment.apiUrl}${API_SERVICE.MOVIES}/${movieId}`;
    return this.http.get<Movie>(url);
  }

}
