import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/button/button.component';


@Component({
  selector: 's2m-error500',
  standalone: true,
  imports: [AngularSvgIconModule, ButtonComponent],
  template: `
        <div class="flex max-w-lg flex-col items-center justify-center gap-2 rounded-lg bg-background p-8 text-center shadow-sm">
            <h1 class="text-4xl font-bold text-foreground">Oops! Server Error</h1>
            <p class="text-base text-muted-foreground">
                Please try again later. If the issue persists, feel free to contact us for assistance.
            </p>
            <s2m-button (buttonClick)="goToHomePage()" impact="bold" tone="primary" shape="rounded" size="medium">
                Homepage
            </s2m-button>
            <svg-icon src="assets/illustrations/500.svg" svgClass="w-[300px] h-[300px] text-muted-foreground "> </svg-icon>
        </div>
  `,
})
export class Error500Component {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}