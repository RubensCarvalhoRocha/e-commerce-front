import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { ProdutoCarrinho } from 'app/model/ProdutoCarrinho';
import { Produto } from 'app/model/Produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
    origialProdutosCarrinhoList: ProdutoCarrinho[] = [];

    constructor(private _carrinhoService: CarrinhoService) {}

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

    realizarPedido(){}
}
