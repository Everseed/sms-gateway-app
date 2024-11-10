import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 's2m-bottom-navbar',
    templateUrl: './bottom-navbar.component.html',
    styleUrls: ['./bottom-navbar.component.scss'],
    standalone: true,
    imports: [AngularSvgIconModule],
})
export class BottomNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
