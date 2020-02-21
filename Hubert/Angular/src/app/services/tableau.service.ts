import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';

@Injectable()
export class TableauService {

  private _prenom: string;
  private _nom: string;
  private list: Personne[] = [new Personne('toto', 'popo'), new Personne('titi', 'pipi')];

  constructor() { }

  public listePersonne(){
    return this.list;
  }

  get prenom(): string {
    return this._prenom;
  }

  get nom(): string {
    return this._nom;
  }
}
