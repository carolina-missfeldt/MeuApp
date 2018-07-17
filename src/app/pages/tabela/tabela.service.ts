import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Cadastro } from '../../resources/class/cadastro';


@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  constructor(private http: HttpClient) { }

  public listTable(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>('http://localhost:3000/cadastro')
    .pipe(
      map(res => res.map(
        item =>
        Object.assign(new Cadastro(), item)
      ))
    );
  }

  public deleteItem(id: number): Observable<Response> {
    return this.http.delete<Response>(`http://localhost:3000/cadastro/${id}`);
  }
}
