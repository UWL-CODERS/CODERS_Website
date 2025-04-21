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
          { src: 'assets/images/Boys_And_Girls/IMG_6750.png', alt: 'Helping Children Learn CS', caption: 'Helping Children Learn CS', event: 'UWL | Boys and Girls Club'},
          { src: 'assets/images/Boys_And_Girls/IMG_6737.png', alt: 'Luke Checking Code', caption: 'Luke Checking Code', event: 'UWL | Boys and Girls Club'},
          { src: 'assets/images/Boys_And_Girls/IMG_6745.png', alt: 'Showing Students How to Solve a Coding Problem', caption: 'Showing Students How to Solve a Coding Problem', event: 'Boy\'s and Girl\'s Club Volunteering'},
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
          { src: 'assets/images/CookiesCODERS/IMG_6956.png', alt: 'Chill Guys Working on this Website', caption: 'Chill Guys Working on the Website', event: 'Cookies With CODERS' },
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
        'ALl of Our Past Events',
        'A Variety of Volunteer Opportunities Both On and Off Campus!',
        [
          { src: 'assets/images/TrickOrTreat24/IMG_6144.jpg', alt: 'Friends Handing Out Candy', caption: 'Friends Handing Out Candy', event: 'Enchanted Forest Trick Or Treat 2024'},
          { src: 'path/to/image2.jpg', alt: 'Alt text', caption: 'Caption text', event: 'Event Name' },
          { src: 'assets/images/TrickOrTreat24/IMG_6146.jpg', alt: 'Jack being Jack', caption: 'Jack Being Jack', event: 'Enchanted Forest Trick Or Treat 2024'},
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
