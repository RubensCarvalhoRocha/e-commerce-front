import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { Produto } from 'app/model/Produto';
import { ProdutosService } from '../admin/produtos/produtos.service';

@Injectable({
    providedIn: 'root',
})
export class ResolverProdutos implements Resolve<Produto[]> {
    constructor(private _produtoService: ProdutosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Produto[]> {
        return this._produtoService.listarProdutos();
    }
}

@Injectable({
    providedIn: 'root',
})
export class ResolverProduto implements Resolve<Produto> {
    constructor(private _produtoService: ProdutosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Produto> {
        const produtoId = Number(route.paramMap.get('id'));
        return this._produtoService.buscarProdutoPeloId(produtoId);
    }
}
