import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComingSoonPage} from './pages/coming-soon-page/coming-soon.page';
import {LoginPage} from './pages/login-page/login.page';
import {NotFoundPage} from './pages/not-found-page/not-found.page';
import {MovieDetailsPage} from './pages/movie-details-page/movie-details.page';
import {MoviesPage} from './pages/movies-page/movies.page';
import {RecommendationsPage} from './pages/recommendations-page/recommendations.page';
import {MoviesResolverService} from './shared/resolver/movies-resolver.service';
import {MovieDetailsResolverService} from './shared/resolver/movie-details-resolver.service';
import {PAGES, TEXTS} from './app.constants';

const EVERY_PATHS = '**';
const PATH_MATCH_FULL = 'full';

const routes: Routes = [
  {
    path: TEXTS.EMPTY_STRING,
    redirectTo: PAGES.MOVIES,
    pathMatch: PATH_MATCH_FULL
  },
  {
    path: PAGES.MOVIES,
    component: MoviesPage,
    resolve: {
      movies: MoviesResolverService
    }
  },
  {
    path: `${PAGES.MOVIES}/:${PAGES.MOVIE_ID_PARAMETER}`,
    component: MovieDetailsPage,
    resolve: {
      movie: MovieDetailsResolverService
    }
  },
  {
    path: PAGES.COMING_SOON,
    component: ComingSoonPage
  },
  {
    path: PAGES.RECOMMENDATIONS,
    component: RecommendationsPage
  },
  {
    path: PAGES.LOGIN,
    component: LoginPage
  },
  {
    path: EVERY_PATHS,
    component: NotFoundPage
  },
];

@NgModule({
  imports:
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
