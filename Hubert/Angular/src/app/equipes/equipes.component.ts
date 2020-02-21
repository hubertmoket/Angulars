import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  private equipe: string = '';
  private nbreVote = 0;

  constructor() { }

  ngOnInit() {
  }

  public recuperationVote(o){
    if (o.vote>this.nbreVote){
      this.nbreVote=o.vote;
      this.equipe=o.nom;
    }
  }

}
