import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private router = inject(Router);
  private appComponent = inject(AppComponent);
  private isAnimating = false; // Added animation lock flag

  email: string = 'info@codersclub.com';

  navigateAndReload(route: string) {
    if (this.isAnimating) return; // Prevent multiple triggers
    this.isAnimating = true; // Lock animation

    this.appComponent.pageTransition().transitionOut().then(() => {
      this.router.navigate([route]).then(() => {
        window.scrollTo(0, 0);
        this.appComponent.pageTransition().transitionIn()
          .then(() => this.isAnimating = false); // Release lock
      }).catch(error => {
        console.error('Navigation error:', error);
        this.isAnimating = false; // Release lock on error
      });
    });
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
