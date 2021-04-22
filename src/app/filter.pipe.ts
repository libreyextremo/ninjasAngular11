import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    // check if search is undefined
    if (term === undefined) {
      return ninjas;
    }
    // devuelve verdadero y se mostrará cuando el nombre incluya el termino buscado, si devuelve falso no se mostrará
    return ninjas.filter(
      (ninja: any) => {
        return ninja.name.toLowerCase().includes(term.toLowerCase());
      });
  }
}
