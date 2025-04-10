import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component'; // Import AppComponent

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private router = inject(Router);
  private appComponent = inject(AppComponent); // Inject AppComponent

  email: string = 'info@codersclub.com';

  navigateAndReload(route: string) {
    const transitionOutPromise = this.appComponent.pageTransition().transitionOut(); // Blocks go down

    transitionOutPromise.then(() => {
      this.appComponent.logoTransition()?.startAnimation(); // Start logo animation
      this.router.navigate([route]).then(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        this.appComponent.pageTransition().transitionIn(); // Blocks come up
      });
    });
  }

  /**
   * Checks if the given route is the current active route.
   * @param route - The route to check.
   * @returns True if the route is active, false otherwise.
   */
  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}