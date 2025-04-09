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
          event: 'Coding Workshop 2023',
        },
        {
          id: 102,
          src: 'https://via.placeholder.com/600x400',
          alt: 'Instructor teaching',
          caption: 'Instructor explaining code',
          event: 'Coding Workshop 2023',
        },
      ],
    },
    {
      id: 2,
      title: 'Cookies With CODERS',
      description:
        'Weekly meetup in Wing Technology Room 016 where we hang out, work on projects, and plan events! AND DONT FORGET FREE COOKIES!!!',
      meta: [
        {
          text: 'Weekly Meetup',
          iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
        },
        {
          text: 'Free Cookies',
          iconPath: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z',
        },
      ],
      images: [
        {
          id: 201,
          src: 'https://via.placeholder.com/600x400/FFC0CB/000000?Text=Cookies',
          alt: 'Cookies at a CODERS meetup',
          caption: 'Enjoying some delicious cookies',
          event: 'Weekly Meetup',
        },
        {
          id: 202,
          src: 'https://via.placeholder.com/600x400/ADD8E6/000000?Text=Coding',
          alt: 'Members coding together',
          caption: 'Working on our latest projects',
          event: 'Weekly Meetup',
        },
      ],
    },
    {
      id: 3,
      title: 'Community Volunteering',
      description:
        'We actively volunteer with the Boys and Girls Club and Kids College, engaging with the community and inspiring the next generation in technology.',
      meta: [
        {
          text: 'Boys & Girls Club',
          iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z',
        },
        {
          text: 'Kids College',
          iconPath: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z',
        },
      ],
      images: [
        {
          id: 301,
          src: 'https://via.placeholder.com/600x400/90EE90/000000?Text=Volunteer',
          alt: 'Volunteering at the Boys and Girls Club',
          caption: 'Sharing our passion for technology',
          event: 'Community Outreach',
        },
        {
          id: 302,
          src: 'https://via.placeholder.com/600x400/FFA07A/000000?Text=Kids',
          alt: 'Working with kids at Kids College',
          caption: 'Inspiring young minds',
          event: 'Community Outreach',
        },
      ],
    },
    {
      id: 4,
      title: 'On-Campus Events',
      description:
        'We organize and host various events on campus to foster a vibrant tech community, including workshops, social events, and guest speaker sessions.',
      meta: [
        {
          text: 'Workshops',
          iconPath: 'M2 7h16m-7 10v5m5-2 2 2m-9.5-2-2 2M8 7V3m13 12H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z',
        },
        {
          text: 'Social Events',
          iconPath: 'M10 20v-6h4v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm10-16H4a2 2 0 0 0-2 2v6l4 4h12l4-4V6a2 2 0 0 0-2-2z',
        },
      ],
      images: [
        {
          id: 401,
          src: 'https://via.placeholder.com/600x400/DDA0DD/000000?Text=Event',
          alt: 'On-campus event in progress',
          caption: 'Engaging with the campus community',
          event: 'Campus Events',
        },
        {
          id: 402,
          src: 'https://via.placeholder.com/600x400/4682B4/FFFFFF?Text=Hack',
          alt: 'Working in a event space',
          caption: 'Building innovative solutions',
          event: 'Campus Events',
        },
      ],
    },
  ];

  openModal(image: Image): void {
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