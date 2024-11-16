import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[sticky]'
})
export class StickyDirective {
  @HostBinding('class.sticky') sticky = false;

  @HostListener('window:scroll') onScroll() {
    this.sticky = true;
    if (window.scrollY === 0) {
      this.sticky = false;
    }
  } 
  
  constructor() { }

}
