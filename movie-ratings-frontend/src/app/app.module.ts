import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesPageComponent} from './pages/movies-page/movies-page.component';
import {HeaderComponent} from './shared/component/header/header.component';
import {FooterComponent} from './shared/component/footer/footer.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ComingSoonPageComponent} from './pages/coming-soon-page/coming-soon-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieDetailsPageComponent} from './pages/movie-details-page/movie-details-page.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [
  AppComponent,
  FooterComponent,
  HeaderComponent,
];

const PAGES = [
  ComingSoonPageComponent,
  LoginPageComponent,
  MovieDetailsPageComponent,
  MoviesPageComponent,
  PageNotFoundComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PAGES
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
