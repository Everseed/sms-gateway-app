import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { ResponsiveHelperComponent } from './shared/responsive-helper/responsive-helper.component';

@Component({
  selector: 's2m-root',
  standalone: true,
  imports: [NgClass, RouterOutlet, ResponsiveHelperComponent, NgxSonnerToaster],
  template: `
              <div>
                <router-outlet></router-outlet>
                <s2m-responsive-helper></s2m-responsive-helper>
                <ngx-sonner-toaster ></ngx-sonner-toaster>
              </div>
            `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
