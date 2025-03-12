import { Component } from '@angular/core';
import { ProjectCarousel } from './components/project-carousel/project.carousel';

@Component({
    selector: 'app-research-projects',
    imports: [ProjectCarousel],
    templateUrl: './research-projects.component.html',
    styleUrl: './research-projects.component.scss'
})
export class ResearchProjectsComponent {

}