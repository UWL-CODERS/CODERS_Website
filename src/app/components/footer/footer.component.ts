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
        this.appComponent.pageTransition().transitionIn(); // Blocks come up
      });
    });
  }
}