import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';

export const TRANSLATE_FAKE_MODULE =
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useClass: TranslateFakeLoader
    }
  });
