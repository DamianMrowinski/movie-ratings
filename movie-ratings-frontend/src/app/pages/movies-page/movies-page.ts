import {Component, OnInit} from '@angular/core';
import {Movie} from "../../shared/model/movie";
import {MovieDataService} from "../../shared/service/data/movie-data.service";
import {NavigationService} from "../../shared/service/navigation/navigation.service";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.html',
  styleUrls: ['./movies-page.scss']
})
export class MoviesPage implements OnInit {

  movies: Movie[];

  constructor(private movieDataService: MovieDataService,
              private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.movieDataService.getMovies$()
      .subscribe(movies => this.movies = movies);
  }

  onMoviesImageClick(movieId: number): void {
    this.navigationService.navigateToMovieDetails(movieId);
  }
}
