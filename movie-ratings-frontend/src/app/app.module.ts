import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    MovieDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
