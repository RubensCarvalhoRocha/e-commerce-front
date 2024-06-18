import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'app/model/Produto';
import { ProdutosService } from 'app/modules/admin/produtos/produtos.service';
import notyf from 'app/utils/utils';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-produtos-a-venda',
  templateUrl: './produtos-a-venda.component.html',
  styleUrls: ['./produtos-a-venda.component.scss']
})
export class ProdutosAVendaComponent implements OnInit {
    itens: Produto[] = [];

    origialProdutosList: Produto[] = [];

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    searchText: string = '';

    constructor(
        private _produtosService: ProdutosService,
        private _matDialog: MatDialog,
        private _route: ActivatedRoute,
        private _carrinhoService: CarrinhoService
    ) {}

    ngOnInit(): void {
        this._produtosService._produtos$.subscribe((response: Produto[]) => {
            this.origialProdutosList = response;
        });
        console.log(this.origialProdutosList);
    }

    // produtosFilter(text: string, applyFilter: boolean = true) {
    //     this.searchText = text;
    //     if (applyFilter) {
    //         const searchTextLower = this.searchText.trim().toLowerCase();
    //         this.produtosList.data = this.origialProdutosList.filter(
    //             (produto) => {
    //                 return (
    //                     searchTextLower === '' ||
    //                     produto.name.toLowerCase().includes(searchTextLower) ||
    //                     produto.description
    //                         .toLowerCase()
    //                         .includes(searchTextLower)
    //                 );
    //             }
    //         );
    //     }
    // }

    // editarProduto(produto?: Produto): void {
    //     const dialogRef = this._matDialog.open(ProdutoEditComponent, {
    //         width: '95%',
    //         height: 'auto',
    //         data: {
    //             produto,
    //         },
    //     });

    //     dialogRef.afterClosed().subscribe((resultado: boolean) => {
    //         if (resultado) {
    //             this._produtosService
    //                 .listarProdutos()
    //                 .subscribe({});
    //         }
    //     });
    // }

    adicionarAoCarrinho(produto : Produto){
        this._carrinhoService.adicionarAoCarrinho(produto);
    }

    teste() {
        notyf.success('Teste');
    }

}
