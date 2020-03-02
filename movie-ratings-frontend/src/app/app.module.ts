import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesPageComponent} from './pages/movies-page/movies-page.component';
import {MovieDetailPageComponent} from './pages/movie-detail-page/movie-detail-page.component';
import {HeaderComponent} from './shared/component/header/header.component';
import {FooterComponent} from './shared/component/footer/footer.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ComingSoonPageComponent} from './pages/coming-soon-page/coming-soon-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {RecommendationsPageComponent} from './pages/recommendations-page/recommendations-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    MovieDetailPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    ComingSoonPageComponent,
    PageNotFoundComponent,
    RecommendationsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
