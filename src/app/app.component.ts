import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 's2m-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
