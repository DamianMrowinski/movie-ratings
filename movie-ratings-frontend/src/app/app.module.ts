import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesPage} from './pages/movies-page/movies.page';
import {HeaderComponent} from './shared/component/header/header.component';
import {FooterComponent} from './shared/component/footer/footer.component';
import {LoginPage} from './pages/login-page/login.page';
import {ComingSoonPage} from './pages/coming-soon-page/coming-soon.page';
import {NotFoundPage} from './pages/not-found-page/not-found.page';
import {MovieDetailsPage} from './pages/movie-details-page/movie-details.page';
import {NgxBootstrapModule} from './shared/module/ngx-bootstrap.module';
import {RecommendationsPage} from './pages/recommendations-page/recommendations.page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxTranslateModule} from './shared/module/ngx-translate.module';

const COMPONENTS = [
  AppComponent,
  FooterComponent,
  HeaderComponent,
];

const PAGES = [
  ComingSoonPage,
  LoginPage,
  MovieDetailsPage,
  MoviesPage,
  NotFoundPage,
  RecommendationsPage,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PAGES,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxBootstrapModule,
    NgxTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
