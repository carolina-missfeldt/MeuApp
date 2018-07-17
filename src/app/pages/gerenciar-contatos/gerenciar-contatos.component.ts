import { Component, OnInit } from '@angular/core';
import { GerenciarContatosService } from './gerenciar-contatos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../../resources/generic-services/alert.service';
import { Contato } from '../../resources/class/contato';

@Component({
  selector: 'app-tabela',
  templateUrl: './gerenciar-contatos.component.html',
  styleUrls: ['./gerenciar-contatos.component.scss']
})
export class GerenciarContatosComponent implements OnInit {

  public listaDeCadastrados: Array<Contato> = [];
  public displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'mensagem', 'button'];

  constructor(private gContatos: GerenciarContatosService, private alert: AlertService) { }

  ngOnInit() {
    this.criarTabela();
  }

  public criarTabela() {
    this.listaDeCadastrados = undefined;
    this.gContatos.listTable()
      .subscribe(success => {
        this.listaDeCadastrados = success;
      },
        (err: HttpErrorResponse) => {
          this.listaDeCadastrados = [];
          this.alert.openSnackBar(err.statusText, '');
        }
      );
  }

  public deletarItem(id: number) {
    this.gContatos.deleteItem(id)
      .subscribe(
        success => {
          this.criarTabela();
        },
        (err: HttpErrorResponse) => {
          this.alert.openSnackBar(err.statusText, '');
        }
      );
  }

}
