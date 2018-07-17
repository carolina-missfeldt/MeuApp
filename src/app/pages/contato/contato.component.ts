import { Component, OnInit, Input } from '@angular/core';
import { Contato } from '../../resources/class/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html'
})
export class ContatoComponent implements OnInit {
  public contato: Contato;
  constructor() { }

  ngOnInit() {
    this.contato = undefined;
  }

  public recebeContato(contato: Contato) {
    this.contato = contato;
  }

}
