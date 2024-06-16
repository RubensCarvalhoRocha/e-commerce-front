import { BehaviorSubject, Observable, catchError, tap, of, map } from 'rxjs';
import { environment } from 'envinronments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'app/model/Produto';

@Injectable({
    providedIn: 'root',
})
export class ProdutosService {
    private _produtos: BehaviorSubject<Produto[]> =
        new BehaviorSubject([]);

    constructor(private http: HttpClient) {}

    get _produtos$(): Observable<Produto[]> {
        return this._produtos.asObservable();
    }

    listarProdutos(): Observable<Produto[]> {
        return this.http
            .get<Produto[]>(`${environment.api}/api/product/`)
            .pipe(
                catchError((error) => {
                    this._produtos.next([]);
                    return of([]);
                }),
                tap((response: Produto[]) => {
                    this._produtos.next(response);
                })
            );
    }

    getProdutoById(produto: Produto): Observable<Produto> {
        return this._produtos.pipe(
            map((Produtos: Produto[]) => Produtos.find((Produto) => Produto.name === produto))
        );
    }

}
