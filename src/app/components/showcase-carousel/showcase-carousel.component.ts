
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  projectButton: string;
  languages: string[];
}

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './showcase-carousel.component.html',
  styleUrl: './showcase-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcaseCarouselComponent {
  readonly projects = input<Project[]>([]);

  responsiveOptions: any[] = [
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}