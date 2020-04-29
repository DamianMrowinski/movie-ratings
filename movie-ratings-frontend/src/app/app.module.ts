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
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonPageComponent,
    FooterComponent,
    HeaderComponent,
    LoginPageComponent,
    MovieDetailsPageComponent,
    MoviesPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
