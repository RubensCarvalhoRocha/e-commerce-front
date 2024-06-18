import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { ProdutoCarrinho } from 'app/model/ProdutoCarrinho';
import { Produto } from 'app/model/Produto';
import { AuthService } from 'app/core/auth/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import notyf from 'app/utils/utils';
import { PedidoCompra } from 'app/model/PedidoCompra';

@Component({
    selector: 'app-carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
    origialProdutosCarrinhoList: ProdutoCarrinho[] = [];

    constructor(
        private _carrinhoService: CarrinhoService,
        private _authService: AuthService,
        private _route: Router
    ) {}

    ngOnInit(): void {
        this._carrinhoService._listaProdutosCarrinho$.subscribe(
            (response: ProdutoCarrinho[]) => {
                this.origialProdutosCarrinhoList = response;
            }
        );
        console.log(this.origialProdutosCarrinhoList);
    }

    adicionarAoCarrinho(produto: Produto, quantidade: number): void {
        this._carrinhoService.adicionarAoCarrinho(produto);
    }

    esvaziarCarrinho() {
        this._carrinhoService.esvaziarCarrinho();
    }

    getTotal() {
        return this.origialProdutosCarrinhoList.reduce(
            (acc, item) => acc + item.preco,
            0
        );
    }

    realizarPedido() {
        this._authService.check().subscribe((isAuthenticated) => {
            if (isAuthenticated) {
                // O usuário está logado, pode realizar o pedido
                this.procederComPedido();
            } else {
                // O usuário não está logado, redirecionar para a rota de login
                this._route.navigate(['/sign-in']);
            }
        });
    }

    procederComPedido() {
        // Mapeia a lista de produtos do carrinho para o formato esperado pela API
        const pedidoCompra = this.origialProdutosCarrinhoList.map((item) => ({
            id: item.produtoId,
            quantity: item.quantidadeSelecionada,
        }));

        // Cria o objeto de pedido no formato correto
        const pedido = new PedidoCompra({ pedidoCompra });

        // Chama o serviço para finalizar o pedido
        this._carrinhoService.finalizarPedido(pedido).subscribe({
            next: () => {
                notyf.success('Pedido realizado com sucesso!');
                this.esvaziarCarrinho();
            },
            error: (error) => {
                notyf.error('Algo deu errado! Tente novamente.');
                console.error(error);
            },
        });
    }
}
