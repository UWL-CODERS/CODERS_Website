import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  selectedImage: any = null;

  // Events array to be initialized in ngOnInit
  events: any[] = [];

  // Helper method to create an album
  private createAlbum(title: string, description: string, images: any[], meta: any[] = []): any {
    return { title, description, meta, images };
  }

  ngOnInit(): void {
    // Initialize all albums here
    this.events = [
      this.createAlbum(
        'Volunteer Work at Boys\' and Girls\' Club',
        'Weekly Sessions of Volunteering Dedicated to Teach Computer Science Concepts.',
        [
          { src: 'assets/images/IMG_6750.png', alt: 'Helping Children Learn CS', caption: 'Helping Children Learn CS', event: 'UWL | Boys and Girls Club'},
          { src: 'assets/images/IMG_6146.jpg', alt: 'Jack being Jack', caption: 'Jack Being Jack', event: 'Enchanted Forest Trick Or Treat 2024'},
          { src: 'assets/images/IMG_6745.png', alt: 'Andree Helping A Student', caption: 'Andree Helping Students Understand CS', event: 'Boy\'s and Girl\'s Club Volunteering'},
        ],
        [
          {
            text: ' La Crosse',
            iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
          }
        ]
      ),

      this.createAlbum(
        'Cookies With CODERS',
        'A Weekly Event to Hang out, Work On Projects, and Eat Cookies!',
        [
          { src: 'path/to/image1.jpg', alt: 'Alt text', caption: 'Caption text', event: 'Event Name' },
          { src: 'path/to/image2.jpg', alt: 'Alt text', caption: 'Caption text', event: 'Event Name' },
          { src: 'path/to/image3.jpg', alt: 'Alt text', caption: 'Caption text', event: 'Event Name' },
        ],
        [
          {
            text: ' UWL',
            iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
          }
        ]
      ),

      this.createAlbum(
        'Collage of Past Events',
        'A Variety of Volunteer Opportunities Both On and Off Campus!',
        [
          { src: 'assets/images/IMG_6144.jpg', alt: 'Friends Handing Out Candy', caption: 'Friends Handing Out Candy', event: 'Enchanted Forest Trick Or Treat 2024'},
          { src: 'path/to/image2.jpg', alt: 'Alt text', caption: 'Caption text', event: 'Event Name' },
          { src: 'path/to/image3.jpg', alt: 'Alt text', caption: 'Caption text', event: 'Event Name' },
        ],
        [
          {
            text: ' La Crosse',
            iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
          }
        ]
      )

      // Add more albums as needed

    ];
  }

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
