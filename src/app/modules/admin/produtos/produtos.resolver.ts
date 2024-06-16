import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { ProdutosService } from './produtos.service';

@Injectable({
    providedIn: 'root',
})
export class ResolverProdutos implements Resolve<any[]> {
    constructor(private _produtoService: ProdutosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any[]> {
        return this._produtoService.listarProdutos();
    }
}

// @Injectable({
//     providedIn: 'root',
// })
// export class InventarioResolver2 implements Resolve<[]> {
//     constructor(private _service: InventarioService) {}

//     resolve(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot
//     ): Observable<[]> {
//         return this._service.listarEventos();
//     }
// }
