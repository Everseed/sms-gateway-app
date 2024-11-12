import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 's2m-main',
    template: `<div>Welcome</div>`,
    standalone: true,
    imports: [RouterOutlet],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('count: %d', 1);
  }
}