import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./main/main.component').then(m => m.MainComponent) },
      { path: 'opportunities', loadComponent: () => import('./opportunities/opportunities.component').then(m => m.OpportunitiesComponent) },
      { path: 'research', loadComponent: () => import('./research-projects/research-projects.component').then(m => m.ResearchProjectsComponent) },
      { path: 'pictures', loadComponent: () => import('./pictures/pictures.component').then(m => m.PicturesComponent) },
      { path: 'aboutus', loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent) }
    ],
  }
];
