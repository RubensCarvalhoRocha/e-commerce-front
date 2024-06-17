import { BehaviorSubject, Observable, catchError, tap, of, map } from 'rxjs';
import { environment } from 'envinronments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'app/model/Produto';
import { ProdutoCarrinho } from 'app/model/ProdutoCarrinho';

@Injectable({
    providedIn: 'root',
})
export class CarrinhoService {
    private _listaProdutosCarrinho: BehaviorSubject<ProdutoCarrinho[]> =
        new BehaviorSubject([]);

    constructor(private http: HttpClient) {}

    get _listaProdutosCarrinho$(): Observable<ProdutoCarrinho[]> {
        return this._listaProdutosCarrinho.asObservable();
    }
    carregarCarrinho() {
        try {
            const cartData = localStorage.getItem('carrinho');
            if (cartData) {
                this._listaProdutosCarrinho.next(JSON.parse(cartData)); // Parse JSON data if available
            }
        } catch (error) {
            console.error(
                'Erro ao carregar itens do carrinho no localStorage:',
                error
            );
            // Handle errors gracefully (e.g., display a message or initialize an empty cart)
        }
    }

    adicionarAoCarrinho(produto: Produto): void {
        const carrinho = this._listaProdutosCarrinho.getValue();
        const existingProduct = carrinho.find(
            (item) => item.produtoId === produto.id
        );

        if (existingProduct) {
            existingProduct.quantidadeSelecionada++;
        } else {
            carrinho.push({
                produtoId: produto.id,
                quantidadeSelecionada: 1,
                nome: produto.name,
                preco: produto.price,
            });
        }

        this._listaProdutosCarrinho.next(carrinho);
        this.salvarCarrinho(carrinho);
    }

    removerDoCarrinho() {}

    private salvarCarrinho(produtoCarrinho: ProdutoCarrinho[]) {
        localStorage.setItem('carrinho', JSON.stringify(produtoCarrinho));
    }

    listarProdutosDoCarrinho(): Observable<ProdutoCarrinho[]> {
        return this._listaProdutosCarrinho$;
    }

    esvaziarCarrinho() {
        this._listaProdutosCarrinho.next([]);

        // Clear the cart data from localStorage
        localStorage.removeItem('carrinho');
    }
}
