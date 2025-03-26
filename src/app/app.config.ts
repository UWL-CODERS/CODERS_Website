// DO NOT MODIFY THIS!!!

import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Nora from '@primeng/themes/nora';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withIncrementalHydration()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Nora,
      },
    }),
  ],
};