import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
	constructor(elementRef: ElementRef) {
		elementRef.nativeElement.style.backgroundColor = 'yellow';
	}
}
