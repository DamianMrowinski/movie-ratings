import {NgModule} from '@angular/core';
import {NgxNavbarModule} from 'ngx-bootstrap-navbar';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {RatingModule} from 'ngx-bootstrap/rating';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    NgxNavbarModule,
    RatingModule.forRoot(),
  ],
  exports: [
    BsDropdownModule,
    NgxNavbarModule,
    RatingModule,
  ],
})
export class NgxBootstrapModule {
}
