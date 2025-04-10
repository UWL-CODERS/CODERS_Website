import { Component } from '@angular/core';

@Component({
  selector: 'app-pictures',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  selectedImage: any = null;

  events = [
    {
      title: 'Events',
      description: 'Weekly Meetup in Wing 16 Technology Center where we discuss plans or work on projects together.',
      meta: [
        {
          text: 'Cookies and Coders',
          iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
        }
      ],
      images: [
        {
          src: 'assets/images/IMG_6750.png',
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
}