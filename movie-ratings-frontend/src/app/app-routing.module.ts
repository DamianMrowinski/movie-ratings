import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesPageComponent} from "./pages/movies-page/movies-page.component";
import {MovieDetailPageComponent} from "./pages/movie-detail-page/movie-detail-page.component";
import {ComingSoonPageComponent} from "./pages/coming-soon-page/coming-soon-page.component";
import {RecommendationsPageComponent} from "./pages/recommendations-page/recommendations-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies', pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesPageComponent
  },
  {
    path: 'movie-details',
    component: MovieDetailPageComponent
  },
  {
    path: 'coming-soon',
    component: ComingSoonPageComponent
  },
  {
    path: 'recommendations',
    component: RecommendationsPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
