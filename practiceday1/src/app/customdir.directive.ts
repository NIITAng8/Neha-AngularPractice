import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomdir]'
})
export class CustomdirDirective {
@Input() name:string;
  constructor(private e:ElementRef) { 
   // this.e.nativeElement.style.backgroundColor='yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
   // alert(this.name)
    this.higlightColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.higlightColor(null);
  }

  private higlightColor(color:string){
    this.e.nativeElement.style.backgroundColor=color;
   // alert('Welcome to custom dir');
  }

}
