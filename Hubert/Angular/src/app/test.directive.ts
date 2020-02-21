import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private el: ElementRef, private  renderer: Renderer2) {
    // console.log(el);
    console.log(this.renderer);
  }

}
