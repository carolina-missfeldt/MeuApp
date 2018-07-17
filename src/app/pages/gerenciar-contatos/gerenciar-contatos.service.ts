import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Contato } from '../../resources/class/contato';


@Injectable({
  providedIn: 'root'
})
export class GerenciarContatosService {

  constructor(private http: HttpClient) { }

  public listTable(): Observable<Contato[]> {
    return this.http.get<Contato[]>('http://localhost:3000/cadastro')
    .pipe(
      map(res => res.map(
        item =>
        Object.assign(new Contato(), item)
      ))
    );
  }

  public deleteItem(id: number): Observable<Response> {
    return this.http.delete<Response>(`http://localhost:3000/cadastro/${id}`);
  }
}
