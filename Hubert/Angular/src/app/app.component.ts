import { Component } from '@angular/core';
import {Personne} from './model/personne';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title: Personne = new Personne( 'hubert', 'moket');
  //
  // message='';
  //
  // public hello(){
  //   this.message = 'salut';
  // }

  public methode(param){
    console.log(param);
  }


}


