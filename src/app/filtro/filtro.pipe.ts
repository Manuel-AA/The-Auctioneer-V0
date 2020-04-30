import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any = "", ...args: any[]): any {
    const resultadoBusqueda = [];
    for (const producto of value) {
      if (producto.nombre.indexOf(args) > -1) {
        resultadoBusqueda.push(producto);
      }
    }
    return resultadoBusqueda;
  }

}
