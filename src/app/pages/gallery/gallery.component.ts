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
    this.events = [

      // Volunteer Work
      this.createAlbum(
        'Volunteer Work at Boys\' and Girls\' Club',
        'Weekly Sessions of Volunteering Dedicated to Teach Computer Science Concepts.',
        [
          { src: 'assets/images/Boys_And_Girls/IMG_6750.png', alt: 'Andree Helping A Student Improve their Problem-Solving Skills', caption: 'Andree Helping A Student Improve their Problem-Solving Skills', event: 'UWL | Boys and Girls Club'},
          { src: 'assets/images/Boys_And_Girls/IMG_6737.png', alt: 'Luke Checking A Student\'s Code', caption: 'Luke Checking Code', event: 'UWL | Boys and Girls Club'},
          { src: 'assets/images/Boys_And_Girls/IMG_6745.png', alt: 'Andree Guiding A Student on How to Solve a Coding Problem', caption: 'Andree Guiding A Student on How to Solve a Coding Problem', event: 'UWL | Boys and Girls Club'},
        ],
        [
          {
            text: ' La Crosse',
            iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
          }
        ]
      ),

      // Cookies With CODERS
      this.createAlbum(
        'Cookies With CODERS',
        'A Weekly Event to Hang out, Work On Projects, and Eat Cookies!',
        [
          { src: 'assets/images/CookiesCODERS/IMG_6956.png', alt: 'Chill Guys Working on the Website Project', caption: 'Chill Guys Working on the Website', event: 'Cookies With CODERS | Weekly Event' },
          { src: 'assets/images/CookiesCODERS/IMG_7013.png', alt: 'Oreos!!!', caption: 'Oreos!!!', event: 'Cookies With CODERS | Weekly Event' },
          { src: 'assets/images/CookiesCODERS/IMG_7008.png', alt: 'Putting Final Touches on the Website Project', caption: 'Putting Final Touches on the Website Project', event: 'Cookies With CODERS | Weekly Event' },
        ],
        [
          {
            text: ' UWL',
            iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
          }
        ]
      ),

      // Kids' College
      this.createAlbum(
        'Kids\' College | April 2025',
        'Volunteering to Teach 6-8th Graders the Wonderful World of Computer Science!',
        [
          { src: 'assets/images/Kids College Pictures/IMG_0875.png', alt: 'Brendan Teaching Students How To Think Critically', caption: 'Brendan Teaching Students How To Think Critically', event: 'Kids\' College | April 2025' },
          { src: 'assets/images/Kids College Pictures/IMG_6891.png', alt: 'Students Discussing to Solve the Maze', caption: 'Students Discussing to Solve the Maze', event: 'Kids\' College | April 2025' },
          { src: 'assets/images/Kids College Pictures/IMG_6895.png', alt: 'Students Attempting to Solve A Puzzle', caption: 'Students Attempting to Solve A Puzzle', event: 'Kids\' College | April 2025' },
          { src: 'assets/images/Kids College Pictures/IMG_0878.png', alt: 'A Group of Students Solved The Puzzle!', caption: 'A Group of Students Solved The Puzzle!', event: 'Kids\' College | April 2025' },
          { src: 'assets/images/Kids College Pictures/IMG_6889.png', alt: 'Zheyi and Jack Presenting Facts of CS Majors', caption: 'Zheyi and Jack Presenting Topics of CS', event: 'Kids\' College | April 2025' },
          { src: 'assets/images/Kids College Pictures/IMG_6899.png', alt: 'Jack Handing Out Candy to The Winners', caption: 'Jack Handing Out Candy to The Winners', event: 'Kids\' College | April 2025' },
        ],
        [
          {
            text: ' UWL',
            iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
          }
        ]
      ),

      // Past Events
      this.createAlbum(
        'All of Our Past Events',
        'A Variety of Volunteer Opportunities Both On and Off Campus!',
        [
          { src: 'assets/images/TrickOrTreat24/IMG_6144.jpg', alt: 'Friends Handing Out Candy', caption: 'Friends Handing Out Candy', event: 'Enchanted Forest Trick Or Treat Trail | October 2024'},
          { src: 'assets/images/Other/IMG_7388.png', alt: 'The CODERS Math and Science Career Forum Booth', caption: 'The CODERS Math and Science Career Forum Booth', event: 'Math and Science Career Forum | November 2024' },
          { src: 'assets/images/TrickOrTreat24/IMG_6146.jpg', alt: 'Jack being Jack', caption: 'Jack Being Jack', event: 'Enchanted Forest Trick Or Treat Trail | October 2024'},
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
