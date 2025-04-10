import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Meta {
  text: string;
  iconPath: string;
}

interface Image {
  id: number;
  src: string;
  alt: string;
  caption: string;
  event: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  meta: Meta[];
  images: Image[];
}

@Component({
  selector: 'app-pictures',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  selectedImage: Image | null = null;

  events: Event[] = [
    {
      id: 1,
      title: 'Events',
      description:
        'Weekly Meetup in Wing 16 Technology Center where we discuss plans or work on projects together.',
      meta: [
        {
          text: 'Cookies and Coders',
          iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z',
        },
      ],
      images: [
        {
          id: 101,
          src: 'https://via.placeholder.com/600x400',
          alt: 'Students working on coding projects',
          caption: 'Collaborating on projects',
          event: 'UWL | Boys and Girls Club'
        },
        {
          src: 'assets/images/IMG_6146.jpg',
          alt: 'Instructor teaching',
          caption: 'Jack Being Jack',
          event: 'Enchanted Forest Trick Or Treat 2024'
        },
        {
          src: 'assets/images/IMG_6144.jpg',
          alt: 'Andree is GOATED',
          caption: 'Working on a new feature',
          event: 'Enchanted Forest Trick Or Treat 2024'
        }
      ]
    }
  ];

  openModal(image: any): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }

  trackByEventId(index: number, event: Event): number {
    return event.id;
  }

  trackByMetaId(index: number, meta: Meta): string {
    return meta.text;
  }

  trackByImageId(index: number, image: Image): number {
    return image.id;
  }
}