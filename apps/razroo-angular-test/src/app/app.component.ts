import { Component } from '@angular/core';

@Component({
  selector: 'razroo-angular-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'razroo-angular-test';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
