import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedCol]'
})
export class RedColDirective {

  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.textDocoration = 'underline';
  }

}
