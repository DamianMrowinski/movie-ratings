import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  navigateToMovieDetails(movieId: number): void {
    this.router.navigate(['movies', movieId]);
  }
}
