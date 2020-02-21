import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  @Input()
  private  nom: string;
  @Output()
  private voterEvent: EventEmitter<object> = new EventEmitter<object>();
  private vote  = 0;

  constructor() { }

  ngOnInit() {
  }

  public voter(){

    this.vote++;
    this.voterEvent.emit({'nom':this.nom, 'vote':this.vote});
  }

}
