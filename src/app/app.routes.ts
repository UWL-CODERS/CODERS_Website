import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'opportunities', component: OpportunitiesComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'about', component: AboutComponent },
        { path: '**', component: HomeComponent }
    ],
  }
];