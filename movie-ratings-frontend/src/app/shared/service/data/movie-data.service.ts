import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Movie} from "../../model/movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {

  constructor(private http: HttpClient) {
  }

  getMovies$(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8080/movies');
  }

  getMovieDetails$(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`http://localhost:8080/movies/${movieId}`);
  }

}
