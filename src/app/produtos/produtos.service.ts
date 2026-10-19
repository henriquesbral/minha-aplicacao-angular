import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from './produtos';


@Injectable()
export class ProdutoService {
    constructor(private http: HttpClient){}
    protected UrlServiceV1: string = "http://localhost:3000/";

    obterProdutos() : Observable<Produtos[]> {
        return this.http
        .get<Produtos[]>(this.UrlServiceV1 + "produtos");
    }
}