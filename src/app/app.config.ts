import { ApplicationConfig, inject, Injectable, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, Title, withIncrementalHydration } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { CODERS_Preset } from '../presets/coders.preset';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`CODERS Club | ${title}`);
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideClientHydration(withIncrementalHydration()),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: CODERS_Preset
        },
    })
  ],
};