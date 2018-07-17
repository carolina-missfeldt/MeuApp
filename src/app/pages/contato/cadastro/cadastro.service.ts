import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../../../resources/class/cadastro';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  public novoCadastro(cadastro: Cadastro): Observable<Response> {
    return this.http.post<Response>('http://localhost:3000/cadastro', cadastro);
  }
}
