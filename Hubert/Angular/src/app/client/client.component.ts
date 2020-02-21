import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Client} from '../model/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  private client: Client = new Client();
  @Output()
  private  enregistrer: EventEmitter<Client> = new EventEmitter<Client>();

  constructor() { }

  ngOnInit() {
  }

  public save(){
    this.enregistrer.emit(this.client);
    // créé un nouveau client pour liberer la memoire afin de ne pas modifier ce qui vient d'etre ajouter
    this.client = new Client();
  }

  // public display() {
  //   if(this.client.prenom && this.client.nom && this.client.ca){
  //     return true;
  //   }
  //   return false;
  // }

}
