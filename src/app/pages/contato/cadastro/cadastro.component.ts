import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { CadastroService } from './cadastro.service';
import { Cadastro } from '../../../resources/class/cadastro';
import { AlertService } from '../../../resources/alert.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  @Output() contatoCadastrado = new EventEmitter();
  public fContato: FormGroup;
  public contato: Cadastro;

  constructor(private cadastroService: CadastroService, private formbuilder: FormBuilder, private alert: AlertService) {
    this.buildForm();

   }

  ngOnInit() {
    this.contato = undefined;
  }

  public buildForm() {
    this.fContato = this.formbuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)] ],
      email: ['', [ Validators.required, Validators.email]],
      telefone: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15),
        Validators.pattern('^(([1-9]*)|(([1-9]*)\.([0-9]*)))$')] ],
      mensagem: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  public cadastrar() {
    if (this.fContato.valid) {
      this.contato = this.fContato.value;
      this.cadastroService.novoCadastro(this.contato)
        .subscribe(
          success => {
            this.alert.openSnackBar('Contato cadastrado com sucesso!', '');
            this.fContato.reset();
            this.contatoCadastrado.emit(this.contato);
            this.contato = undefined;
          },
          (err: HttpErrorResponse) => {
            this.alert.openSnackBar(err.statusText, '');
          }
        );
    }
  }


}
