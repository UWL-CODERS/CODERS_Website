
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
          src: 'https://via.placeholder.com/600x400',
          alt: 'Students working on coding projects',
          caption: 'Collaborating on projects',
          event: 'Coding Workshop 2023'
        },
        {
          src: 'https://via.placeholder.com/600x400',
          alt: 'Instructor teaching',
          caption: 'Instructor explaining code',
          event: 'Coding Workshop 2023'
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