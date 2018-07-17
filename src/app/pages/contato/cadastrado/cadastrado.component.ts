import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cadastro } from '../../../resources/class/cadastro';

@Component({
  selector: 'app-cadastrado',
  templateUrl: './cadastrado.component.html',
  styleUrls: ['./cadastrado.component.scss']
})
export class CadastradoComponent implements OnInit {
  @Input() contato: Cadastro;
  @Output() reset = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public voltar() {
    this.reset.emit(this.contato = undefined);
  }

}
