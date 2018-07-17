import { Component, OnInit } from '@angular/core';
import { TabelaService } from './tabela.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../../resources/alert.service';
import { Cadastro } from '../../resources/class/cadastro';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  public listaDeCadastrados: Array<Cadastro> = [];
  public displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'mensagem', 'button'];

  constructor(private tabelaService: TabelaService, private alert: AlertService) { }

  ngOnInit() {
    this.criarTabela();
  }

  public criarTabela() {
    this.listaDeCadastrados = undefined;
    this.tabelaService.listTable()
      .subscribe( success => {
          this.listaDeCadastrados = success;
       },
       (err: HttpErrorResponse) => {
          this.listaDeCadastrados = [];
          this.alert.openSnackBar(err.statusText, '');
        }
      );
  }

  public deletarItem(id: number) {
    this.tabelaService.deleteItem(id)
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
