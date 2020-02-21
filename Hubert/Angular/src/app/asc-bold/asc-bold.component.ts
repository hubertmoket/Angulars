import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: '[app-asc-bold]',
  templateUrl: './asc-bold.component.html',
  styleUrls: ['./asc-bold.component.css']
})
export class AscBoldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  public click(){
    console.log('on a cliqué')
  }
}
