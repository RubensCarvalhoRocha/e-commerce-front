import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'app/model/Produto';
import notyf from 'app/utils/utils';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Pedido } from 'app/model/Pedido';
import { MeusPedidosService } from './meus-pedidos.service';

@Component({
    selector: 'app-meus-pedidos',
    templateUrl: './meus-pedidos.component.html',
    styleUrls: ['./meus-pedidos.component.scss'],
})
export class MeusPedidosComponent implements OnInit {
    originalPedidosList: Pedido[] = [];
    pedidosList: MatTableDataSource<Pedido>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    displayedColumns: string[] = [
        'name',
        'description',
        'price',
        'quantity',
        'actions',
    ];

    searchText: string = '';

    constructor(
        private _meusPedidosService: MeusPedidosService,
        private _matDialog: MatDialog,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._meusPedidosService.pedidos$.subscribe((response) => {
            this.originalPedidosList = response;
            this.pedidosList = new MatTableDataSource(
                this.originalPedidosList
            );
            this.pedidosList.paginator = this.paginator;
        });
    }

    pedidosFilter(text: string, applyFilter: boolean = true) {
        this.searchText = text;
        if (applyFilter) {
            const searchTextLower = this.searchText.trim().toLowerCase();
            this.pedidosList.data = this.originalPedidosList.filter(
                (produto) => {
                    return (
                        searchTextLower === '' ||
                        produto.name.toLowerCase().includes(searchTextLower)
                        // ||
                        // produto.description
                        //     .toLowerCase()
                        //     .includes(searchTextLower)
                    );
                }
            );
        }
    }

    editarPedido(produto?: Produto): void {
        // const dialogRef = this._matDialog.open(ProdutoEditComponent, {
        //     width: '95%',
        //     height: 'auto',
        //     data: {
        //         produto,
        //     },
        // });

        // dialogRef.afterClosed().subscribe((resultado: boolean) => {
        //     if (resultado) {
        //         this._meusPedidosService
        //             .listarPedidos()
        //             .subscribe({});
        //     }
        // });
    }

    teste() {
        notyf.success('Teste');
    }
}
