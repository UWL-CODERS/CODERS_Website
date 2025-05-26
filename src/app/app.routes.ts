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
        { path: '', title: 'Home', component: HomeComponent },
        { path: 'opportunities', title: 'Opportunities', component: OpportunitiesComponent },
        { path: 'projects', title: 'Projects', component: ProjectsComponent },
        { path: 'gallery', title: 'Gallery', component: GalleryComponent },
        { path: 'about', title: 'About Us', component: AboutComponent },
        { path: '**', component: HomeComponent }
    ],
  }
];