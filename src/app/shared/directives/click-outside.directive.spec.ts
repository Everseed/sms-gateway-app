import { ElementRef } from "@angular/core";
import { ClickOutsideDirective } from "./click-outside.directive";


describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const element = new ElementRef(null) ;
     const document = new Document();
    const directive = new ClickOutsideDirective(element, document);
    expect(directive).toBeTruthy();
  });
});
