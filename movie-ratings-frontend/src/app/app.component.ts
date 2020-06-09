import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CONFIG} from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    translateService.addLangs([CONFIG.ENGLISH_LANG_CODE, CONFIG.GERMAN_LANG_CODE]);
    translateService.setDefaultLang(CONFIG.ENGLISH_LANG_CODE);
  }

}
