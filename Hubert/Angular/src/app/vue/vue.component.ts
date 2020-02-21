import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.css']
})
export class VueComponent implements OnInit {

  // tab: list[] = new list[];

  constructor( ) { }

  ngOnInit() {
  }

  public afficherTableau(){
    return null;
  }

}
