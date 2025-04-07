import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Nora from '@primeng/themes/nora';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)), // Preloading is correctly configured here
    provideClientHydration(withIncrementalHydration()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Nora,
      },
    }),
  ],
};