export class Couleur {
  constructor(private _couleur: string) {
    _couleur = 'yellow';
  }


  get couleur(): string {
    return this._couleur;
  }

  set couleur(value: string) {
    this._couleur = value;
  }
}
