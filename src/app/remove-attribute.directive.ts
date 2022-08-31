import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRemoveAttribute]'
})
export class RemoveAttributeDirective {

  constructor(private el: ElementRef) {

    //this.el.nativeElement.removeAttribute('style');

    //document.querySelector('font[size]').removeAttr('size');
    console.log(this.el.nativeElement);

    var descendents = this.el.nativeElement.getElementsByTagName('*');

    console.log(descendents);

    var i, e, d;
    for (i = 0; i < descendents.length; ++i) {
        e = descendents[i];
        e.removeAttribute('style');
        e.removeAttribute('width');
        e.removeAttribute('align');
    }



    }

 }
