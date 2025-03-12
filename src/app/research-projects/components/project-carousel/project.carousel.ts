import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';


@Component({
    selector: 'project-carousel',
    templateUrl: './project.carousel.html',
    styleUrls: ['./project.carousel.scss'],
    imports: [CarouselModule],
    host: { ngSkipHydration: 'true' }
})
export class ProjectCarousel {
    projects = [
        {
            name: 'CODERS Website',
            owner: { avatar_url: 'https://raw.githubusercontent.com/UWL-CODERS/CODERS_Website/56a83a94350d87b3a679728f08517d91ff1509d0/src/assets/images/logo.png' },
            description: 'This website, which you are currently viewing, was developed by the UWL CODERS Club and is built using a range of modern web technologies. This description is unusually long to test the responsiveness of the carousel component.',
            html_url: 'https://github.com/UWL-CODERS/CODERS_Website',
            technologies: ['Angular', 'TypeScript', 'SCSS']
        },
        {
            name: 'YMCA Project',
            owner: { avatar_url: 'https://avatars.githubusercontent.com/u/63300213' },
            description: 'A web app to manage YMCA programs and registrations as part of a minor project at UW-La Crosse.',
            html_url: 'https://github.com/bishalkarki01/YMCAProject',
            technologies: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'FaceMesh',
            owner: { avatar_url: 'https://avatars.githubusercontent.com/u/132915020' },
            description: 'This project utilizes the CV2 Python package and external Machine-Learning HTML Sources to make a visual face mesh (or multiple).',
            html_url: 'https://github.com/BlambrechtCodes/FaceMesh',
            technologies: ['Python', 'CV2', 'HTML']
        },
        {
            name: 'CODERS Website',
            owner: { avatar_url: 'https://raw.githubusercontent.com/UWL-CODERS/CODERS_Website/56a83a94350d87b3a679728f08517d91ff1509d0/src/assets/images/logo.png' },
            description: 'This website, which you are currently viewing, was developed by the UWL CODERS Club and is built using a range of modern web technologies.',
            html_url: 'https://github.com/UWL-CODERS/CODERS_Website',
            technologies: ['Angular', 'TypeScript', 'SCSS']
        },
        {
            name: 'YMCA Project',
            owner: { avatar_url: 'https://avatars.githubusercontent.com/u/63300213' },
            description: 'A web app to manage YMCA programs and registrations as part of a minor project at UW-La Crosse.',
            html_url: 'https://github.com/bishalkarki01/YMCAProject',
            technologies: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'FaceMesh',
            owner: { avatar_url: 'https://avatars.githubusercontent.com/u/132915020' },
            description: 'This project utilizes the CV2 Python package and external Machine-Learning HTML Sources to make a visual face mesh (or multiple).',
            html_url: 'https://github.com/BlambrechtCodes/FaceMesh',
            technologies: ['Python', 'CV2', 'HTML']
        },
        {
            name: 'CODERS Website',
            owner: { avatar_url: 'https://raw.githubusercontent.com/UWL-CODERS/CODERS_Website/56a83a94350d87b3a679728f08517d91ff1509d0/src/assets/images/logo.png' },
            description: 'This website, which you are currently viewing, was developed by the UWL CODERS Club and is built using a range of modern web technologies.',
            html_url: 'https://github.com/UWL-CODERS/CODERS_Website',
            technologies: ['Angular', 'TypeScript', 'SCSS']
        },
        {
            name: 'YMCA Project',
            owner: { avatar_url: 'https://avatars.githubusercontent.com/u/63300213' },
            description: 'A web app to manage YMCA programs and registrations as part of a minor project at UW-La Crosse.',
            html_url: 'https://github.com/bishalkarki01/YMCAProject',
            technologies: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'FaceMesh',
            owner: { avatar_url: 'https://avatars.githubusercontent.com/u/132915020' },
            description: 'This project utilizes the CV2 Python package and external Machine-Learning HTML Sources to make a visual face mesh (or multiple).',
            html_url: 'https://github.com/BlambrechtCodes/FaceMesh',
            technologies: ['Python', 'CV2', 'HTML']
        },
    ];

    responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
        },
    ];
}