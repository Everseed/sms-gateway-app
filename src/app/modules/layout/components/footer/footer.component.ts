import { Component, OnInit } from '@angular/core';

@Component({
    selector: 's2m-footer',
    templateUrl: './footer.component.html',
    styles: ``,
    standalone: true,
})
export class FooterComponent implements OnInit {

  public year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void { }
}