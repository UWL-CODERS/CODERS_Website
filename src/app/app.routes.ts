import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ResearchProjectsComponent } from './research-projects/research-projects.component';
import { LayoutComponent } from './shared/layout/layout.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: MainComponent },
      { path: 'opportunities', component: OpportunitiesComponent },
      { path: 'research', component: ResearchProjectsComponent },
      { path: 'pictures', component: PicturesComponent },
      { path: 'aboutus', component: AboutUsComponent }
    ],
  }
];
