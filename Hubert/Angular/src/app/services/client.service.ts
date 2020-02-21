import { Injectable } from '@angular/core';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _tabClients: Client[] = [new Client('hubert', 'moket', 200),
    new Client('toto', 'popo', 100)] ;
  constructor() { }

  get tabClients(): Client[] {
    return this._tabClients;
  }

  public delete(index: number){
    this.tabClients.splice(index, 1 );
  }

  public add(client: Client){
    this.tabClients.push(client);
  }
}
