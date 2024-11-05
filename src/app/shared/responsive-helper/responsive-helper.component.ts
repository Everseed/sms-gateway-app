import { Component, OnInit } from '@angular/core';

import { NgIf } from '@angular/common';

@Component({
    selector: 's2m-responsive-helper',
    template: `
          <div *ngIf="!env.production"
            class="fixed bottom-20 right-5 hidden rounded-md bg-primary py-1 px-3 align-middle text-sm font-medium text-primary-foreground sm:block">
            <span class="hidden sm:block md:hidden">sm</span>
            <span class="hidden md:block lg:hidden">md</span>
            <span class="hidden lg:block xl:hidden">lg</span>
            <span class="hidden xl:block 2xl:hidden">xl</span>
            <span class="hidden 2xl:block">2xl</span>
        </div>
    
    `,
    styleUrls: [],
    standalone: true,
    imports: [NgIf],
})
export class ResponsiveHelperComponent implements OnInit {
  public env: any;// = environment;

  constructor() {}

  ngOnInit(): void {}
}