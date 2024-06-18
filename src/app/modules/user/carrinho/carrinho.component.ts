import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { ProdutoCarrinho } from 'app/model/ProdutoCarrinho';
import { Produto } from 'app/model/Produto';
import { AuthService } from 'app/core/auth/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import notyf from 'app/utils/utils';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
    origialProdutosCarrinhoList: ProdutoCarrinho[] = [];

    constructor(private _carrinhoService: CarrinhoService,
        private _authService: AuthService,
        private _route: Router,
    ) {}

    ngOnInit(): void {
        this._carrinhoService._listaProdutosCarrinho$.subscribe((response: ProdutoCarrinho[]) => {
            this.origialProdutosCarrinhoList = response;
        });
        console.log(this.origialProdutosCarrinhoList);
    }

    adicionarAoCarrinho(produto: Produto, quantidade: number): void {
        this._carrinhoService.adicionarAoCarrinho(produto);
    }

    getTotal(){
        return this.origialProdutosCarrinhoList.reduce((acc, item) => acc + item.preco, 0);
    }

    realizarPedido() {
        this._authService.check().subscribe(isAuthenticated => {
          if (isAuthenticated) {
            // O usuário está logado, pode realizar o pedido
            this.procederComPedido();
          } else {
            // O usuário não está logado, redirecionar para a rota de login
            this._route.navigate(['/sign-in']);
          }
        });
      }

      procederComPedido(){
        console.log('Pedido realizado com sucesso!');
        notyf.success('Pedido realizado com sucesso!');
      }
}
