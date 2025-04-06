import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { Project } from '../../models/project.model';

@Component({
    selector: 'app-projects',
    imports: [CarouselComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    projectData: Project[] = [
        {
            title: 'CODERS Website',
            description: 'This website, which you are currently viewing, was developed by the UWL CODERS Club and is built using a range of modern web technologies.',
            imageUrl: 'https://raw.githubusercontent.com/UWL-CODERS/CODERS_Website/refs/heads/main/src/assets/images/logo.png',
            projectUrl: 'https://github.com/UWL-CODERS/CODERS_Website',
            languages: ['TypeScript', 'HTML', 'SCSS', 'Angular'],
            projectButton: 'View Project'
        },
        {
            title: 'YMCA Project',
            description: 'A web app to manage YMCA programs and registrations as part of a minor project at UW-La Crosse.',
            imageUrl: 'https://avatars.githubusercontent.com/u/63300213',
            projectUrl: 'https://github.com/bishalkarki01/YMCAProject',
            languages: ['JavaScript', 'HTML', 'CSS'],
            projectButton: 'View Project'
        },
        {
            title: 'FaceMesh',
            description: 'This project utilizes the CV2 Python package and external Machine-Learning HTML Sources to make a visual face mesh.',
            imageUrl: 'https://avatars.githubusercontent.com/u/132915020',
            projectUrl: 'https://github.com/BlambrechtCodes/FaceMesh',
            languages: ['Python', 'CV2', 'HTML'],
            projectButton: 'View Project'
        },
        {
            title: 'CODERS Website',
            description: 'This website, which you are currently viewing, was developed by the UWL CODERS Club and is built using a range of modern web technologies.',
            imageUrl: 'https://raw.githubusercontent.com/UWL-CODERS/CODERS_Website/refs/heads/main/src/assets/images/logo.png',
            projectUrl: 'https://github.com/UWL-CODERS/CODERS_Website',
            languages: ['TypeScript', 'HTML', 'SCSS', 'Angular'],
            projectButton: 'View Project'
        },
        {
            title: 'YMCA Project',
            description: 'A web app to manage YMCA programs and registrations as part of a minor project at UW-La Crosse.',
            imageUrl: 'https://avatars.githubusercontent.com/u/63300213',
            projectUrl: 'https://github.com/bishalkarki01/YMCAProject',
            languages: ['JavaScript', 'HTML', 'CSS'],
            projectButton: 'View Project'
        },
        {
            title: 'FaceMesh',
            description: 'This project utilizes the CV2 Python package and external Machine-Learning HTML Sources to make a visual face mesh.',
            imageUrl: 'https://avatars.githubusercontent.com/u/132915020',
            projectUrl: 'https://github.com/BlambrechtCodes/FaceMesh',
            languages: ['Python', 'CV2', 'HTML'],
            projectButton: 'View Project'
        },
    ];

    researchData: Project[] = [
        {
            title: 'CODERS Website',
            description: 'This website, which you are currently viewing, was developed by the UWL CODERS Club and is built using a range of modern web technologies.',
            imageUrl: 'https://raw.githubusercontent.com/UWL-CODERS/CODERS_Website/refs/heads/main/src/assets/images/logo.png',
            projectUrl: 'https://github.com/UWL-CODERS/CODERS_Website',
            languages: ['TypeScript', 'HTML', 'SCSS', 'Angular'],
            projectButton: 'View Research'
        },
        {
            title: 'YMCA Project',
            description: 'A web app to manage YMCA programs and registrations as part of a minor project at UW-La Crosse.',
            imageUrl: 'https://avatars.githubusercontent.com/u/63300213',
            projectUrl: 'https://github.com/bishalkarki01/YMCAProject',
            languages: ['JavaScript', 'HTML', 'CSS'],
            projectButton: 'View Research'
        },
        {
            title: 'FaceMesh',
            description: 'This project utilizes the CV2 Python package and external Machine-Learning HTML Sources to make a visual face mesh.',
            imageUrl: 'https://avatars.githubusercontent.com/u/132915020',
            projectUrl: 'https://github.com/BlambrechtCodes/FaceMesh',
            languages: ['Python', 'CV2', 'HTML'],
            projectButton: 'View Research'
        },
        {
            title: 'CODERS Website',
            description: 'This website, which you are currently viewing, was developed by the UWL CODERS Club and is built using a range of modern web technologies.',
            imageUrl: 'https://raw.githubusercontent.com/UWL-CODERS/CODERS_Website/refs/heads/main/src/assets/images/logo.png',
            projectUrl: 'https://github.com/UWL-CODERS/CODERS_Website',
            languages: ['TypeScript', 'HTML', 'SCSS', 'Angular'],
            projectButton: 'View Research'
        },
        {
            title: 'YMCA Project',
            description: 'A web app to manage YMCA programs and registrations as part of a minor project at UW-La Crosse.',
            imageUrl: 'https://avatars.githubusercontent.com/u/63300213',
            projectUrl: 'https://github.com/bishalkarki01/YMCAProject',
            languages: ['JavaScript', 'HTML', 'CSS'],
            projectButton: 'View Research'
        },
        {
            title: 'FaceMesh',
            description: 'This project utilizes the CV2 Python package and external Machine-Learning HTML Sources to make a visual face mesh.',
            imageUrl: 'https://avatars.githubusercontent.com/u/132915020',
            projectUrl: 'https://github.com/BlambrechtCodes/FaceMesh',
            languages: ['Python', 'CV2', 'HTML'],
            projectButton: 'View Research'
        },
    ];
}