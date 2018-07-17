import { Component, OnInit, Input } from '@angular/core';
import { Cadastro } from '../../resources/class/cadastro';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  public contato: Cadastro;
  constructor() { }

  ngOnInit() {
    this.contato = undefined;
  }

  public recebeContato(contato: Cadastro) {
    this.contato = contato;
  }

}
