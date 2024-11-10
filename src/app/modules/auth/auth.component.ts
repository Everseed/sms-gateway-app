import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 's2m-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    standalone: true,
    imports: [AngularSvgIconModule, RouterOutlet],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}