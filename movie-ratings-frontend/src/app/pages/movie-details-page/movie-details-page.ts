import {Component, OnInit} from '@angular/core';
import {Movie} from "../../shared/model/movie";
import {MovieDataService} from "../../shared/service/data/movie-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.html',
  styleUrls: ['./movie-details-page.scss']
})
export class MovieDetailsPage implements OnInit {

  movie: Movie;
  max = 10;
  rate = 7;
  isReadonly = false;

  constructor(private activatedRoute: ActivatedRoute,
              private movieDataService: MovieDataService) {
  }

  ngOnInit(): void {
    const movieId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.movieDataService.getMovieDetails$(movieId)
      .subscribe(movie => this.movie = movie);
  }

}
