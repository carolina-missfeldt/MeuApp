import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoTelefone'
})
export class FormatoTelefonePipe implements PipeTransform {

  transform(value: string): any {
    try {
      while (value.indexOf(' ') !== -1) {
        value = value.replace(' ', '');
      }
      console.log(value);
      const telefone = value.length;
      if (telefone === 11) {

        const ddd = value.substr(0, 2);
        const pNumero = value.substr(2, 1);
        const numero = value.substr(3);
        const celular = `(${ddd}) ${pNumero} ${numero}`;
        return celular;
      }
      if (telefone === 10) {
        const ddd = value.substr(0, 2);
        const numero = value.substr(2);
        const tFixo = `(${ddd}) ${numero}`;
        return tFixo;
      }

    } catch (err) {
      return 'Número indisponível';
    }
    return null;
  }

}
