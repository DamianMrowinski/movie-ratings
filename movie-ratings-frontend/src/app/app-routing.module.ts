import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesPageComponent} from "./pages/movies-page/movies-page.component";
import {MovieDetailPageComponent} from "./pages/movie-detail-page/movie-detail-page.component";

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesPageComponent
  },
  {
    path: 'movie-details',
    component: MovieDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
