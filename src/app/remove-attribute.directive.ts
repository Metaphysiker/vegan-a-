import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRemoveAttribute]'
})
export class RemoveAttributeDirective {

  constructor(private el: ElementRef) {

    //this.el.nativeElement.removeAttribute('style');

    //document.querySelector('font[size]').removeAttr('size');
    console.log(this.el.nativeElement);

    }

 }
