import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-asc-tooltip',
  templateUrl: './asc-tooltip.component.html',
  styleUrls: ['./asc-tooltip.component.css']
})
export class AscTooltipComponent implements OnInit {

  @Input('app-asc-tooltip-titre')
  private titre: string;
  private visible = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseover')
  public over() {
  this.visible = true;
  }

  @HostListener('mouseleave')
  public leave() {
    this.visible = false;
  }


}
