import {Component, OnInit} from '@angular/core';
import {Movie} from '../../shared/model/movie';
import {MovieDataService} from '../../shared/service/data/movie-data.service';
import {NavigationService} from '../../shared/service/navigation/navigation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss']
})
export class MoviesPage implements OnInit {

  movies: Movie[];

  constructor(private movieDataService: MovieDataService,
              private navigationService: NavigationService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(data => this.movies = data.movies);
  }

  onTableRowClick(movieId: number): void {
    this.navigationService.navigateToMovieDetails(movieId);
  }
}
