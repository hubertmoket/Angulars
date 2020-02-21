import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perso'
})
export class PersoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // pipe  perso => si valeur > 200, on cache la valeur par **** sinon on l'affiche
    if (value > 200) {
      return '******';
    }
    return value;
  }

}
