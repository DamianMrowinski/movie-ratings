import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesPage} from './pages/movies-page/movies-page';
import {HeaderComponent} from './shared/component/header/header.component';
import {FooterComponent} from './shared/component/footer/footer.component';
import {LoginPage} from './pages/login-page/login-page';
import {ComingSoonPage} from './pages/coming-soon-page/coming-soon-page';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieDetailsPage} from './pages/movie-details-page/movie-details-page';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxBootstrapModule} from "./shared/module/ngx-bootstrap.module";

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
    NgxBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
