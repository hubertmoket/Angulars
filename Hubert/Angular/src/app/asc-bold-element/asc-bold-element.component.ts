import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-asc-bold-element',
  templateUrl: './asc-bold-element.component.html',
  styleUrls: ['./asc-bold-element.component.css']
})
export class AscBoldElementComponent implements OnInit {

  @Input()
  private  prefix: string;
  @Input()
  private text: string;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  public click(){
    console.log(this.text);
  }

}
