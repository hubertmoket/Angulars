import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  private monRecu: string;

  constructor( private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(lesParametresDeLaRequete => {
      // console.log(lesParametresDeLaRequete.nom);
      // attendre que l'objet se charge et ensuite on le recupere
      this.monRecu = lesParametresDeLaRequete.nom;
    });
  }

  ngOnInit() {
  }

  // fonction goToClient
  goToClient(){
    // on ecrit le traitement ici
    this.router.navigate(['/clients']);
  }

}
