import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.MainComponent) },
      { path: 'opportunities', loadComponent: () => import('./opportunities/opportunities.component').then(m => m.OpportunitiesComponent) },
      { path: 'research', loadComponent: () => import('./pages/research-projects/research-projects.component').then(m => m.ResearchProjectsComponent) },
      { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
      { path: 'aboutus', loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent) }
    ],
  }
];
