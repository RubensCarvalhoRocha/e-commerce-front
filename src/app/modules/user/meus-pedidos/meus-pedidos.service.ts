import { BehaviorSubject, Observable, catchError, tap, of, map } from 'rxjs';
import { environment } from 'envinronments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'app/model/Produto';
import { Pedido } from 'app/model/Pedido';

@Injectable({
    providedIn: 'root',
})
export class MeusPedidosService {
    private _pedidos: BehaviorSubject<Pedido[]> =
        new BehaviorSubject([]);

    constructor(private http: HttpClient) {}

    get pedidos$(): Observable<Pedido[]> {
        return this._pedidos.asObservable();
    }

    listarPedidos(): Observable<Pedido[]> {
        return this.http
            .get<Pedido[]>(`${environment.api}/api/product/`)
            .pipe(
                catchError((error) => {
                    this._pedidos.next([]);
                    return of([]);
                }),
                tap((response: Pedido[]) => {
                    this._pedidos.next(response);
                })
            );
    }

    buscarPedidoPeloId(produtoId: number): Observable<Produto> {
        return this.http
            .get<Produto>(`${environment.api}/api/product/${produtoId}`)
            .pipe(
                catchError((error) => {
                    return of(null);
                })
            );
    }

    salvarPedido(produto: Produto): Observable<Produto> {
        const url = produto.id ? `${environment.api}/api/product/${produto.id}` : `${environment.api}/api/product/`;
        const method = produto.id ? 'patch' : 'post';

        return this.http
        [method]<Produto>(url, produto)
            .pipe(
                catchError((error) => {
                    return of(null);
                })
            );
    }

}
