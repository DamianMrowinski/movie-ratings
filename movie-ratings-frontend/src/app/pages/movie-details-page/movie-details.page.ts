import {Component, OnInit} from '@angular/core';
import {Movie} from '../../shared/model/movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss']
})
export class MovieDetailsPage implements OnInit {

  movie: Movie;
  max = 10;
  rate = 7;
  isReadonly = false;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(data => this.movie = data.movie);
  }

}
