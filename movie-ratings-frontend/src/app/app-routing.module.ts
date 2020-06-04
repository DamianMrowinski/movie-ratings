import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComingSoonPage} from './pages/coming-soon-page/coming-soon-page';
import {LoginPage} from './pages/login-page/login-page';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {MovieDetailsPage} from './pages/movie-details-page/movie-details-page';
import {MoviesPage} from './pages/movies-page/movies-page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesPage
  },
  {
    path: 'movies/:id',
    component: MovieDetailsPage
  },
  {
    path: 'coming-soon',
    component: ComingSoonPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
