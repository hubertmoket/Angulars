import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../model/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  // le tableau filtre initialisé à vide
  private filtre = '';

  // le tableau initialisé des clients
  private tabClients: Client[] = [new Client('hubert', 'moket', 200),
  new Client('toto', 'popo', 100),
  new Client('titi', 'tata', 300),
  new Client('jordan', 'codo', 150),
  new Client('bobo', 'dodo', 500),
  new Client('nadia', 'pere', 100),
  new Client('joe', 'toure', 250)] ;

  constructor() { }

  ngOnInit() {
  }

  // afficher la liste des clients avec le filtre
  public listeClient(){
    return this.tabClients.filter(client => {
      return client.prenom.indexOf(this.filtre) !== -1 || client.nom.indexOf(this.filtre) !== -1;
    });
  }

  // push d'un nouveau client
  public ajoutClient(client: Client){
    this.tabClients.push(client);
  }


  // public afficher() {
  //   if(this.newClient.prenom && this.newClient.nom && this.newClient.ca){
  //     return true;
  //   }
  //   return false;
  // }

}
