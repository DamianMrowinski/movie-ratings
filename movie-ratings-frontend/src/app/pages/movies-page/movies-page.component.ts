import {Component, OnInit} from '@angular/core';
import {Movie} from "../../shared/model/movie";
import {MovieDataService} from "../../shared/service/data/movie-data.service";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {

  movies: Movie[];

  constructor(private movieDataService: MovieDataService) {
  }

  ngOnInit(): void {
    this.movieDataService.getMovies$()
      .subscribe(movies => this.movies = movies);
  }

}
