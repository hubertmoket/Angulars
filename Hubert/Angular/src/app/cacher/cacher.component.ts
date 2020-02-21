import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cacher',
  templateUrl: './cacher.component.html',
  styleUrls: ['./cacher.component.css']
})
export class CacherComponent implements OnInit {

  @Input('hidde')
  private cacher: boolean;

  @Input()
  private  ca: number;

  constructor() { }

  ngOnInit() {
  }

  valeurAffiche(){
    if(this.cacher){
      return '*****';
    }
    return this.ca;
  }

}
