import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[autoFocus]'
})
export class AutofocusDirective implements OnInit{

  private elementRef: ElementRef
 
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    };
 
    public ngOnInit(): void {
        this.elementRef.nativeElement.focus();
    }
}
