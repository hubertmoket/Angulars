import {Personne} from './personne';

export class Client extends Personne{

  constructor(prenom?: string, nom?: string, private ca?: number) {
    super(prenom, nom);
  }


  get ca(): number {
    return this._ca ;
  }

  set ca(value: number) {
    this._ca = value;
  }
}
