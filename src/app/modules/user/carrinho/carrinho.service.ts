import { BehaviorSubject, Observable, catchError, tap, of, map } from 'rxjs';
import { environment } from 'envinronments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'app/model/Produto';
import { ProdutoCarrinho } from 'app/model/ProdutoCarrinho';
import { PedidoCompra } from 'app/model/PedidoCompra';
import notyf from 'app/utils/utils';

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
        // Verifica se o produto tem quantidade disponível no estoque
        if (!produto.quantity || produto.quantity <= 0) {
            // Exibe uma mensagem de aviso (pode usar um toast ou outro método)
            notyf.error('Produto fora de estoque');
            return; // Sai da função, não adiciona ao carrinho
        }

        const carrinho = this._listaProdutosCarrinho.getValue();
        const existingProduct = carrinho.find(
            (item) => item.produtoId === produto.id
        );

        if (existingProduct) {
            existingProduct.quantidadeSelecionada += 1; // Aumenta a quantidade do produto existente
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
        notyf.success('Produto adicionado ao carrinho!');
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

    finalizarPedido(pedido: PedidoCompra): Observable<PedidoCompra> {
        return this.http
            .post<PedidoCompra>(`${environment.api}/api/pedidos`, pedido)
    }
}
