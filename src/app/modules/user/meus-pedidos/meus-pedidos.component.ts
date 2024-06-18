import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'app/model/Produto';
import notyf from 'app/utils/utils';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Pedido } from 'app/model/Pedido';
import { MeusPedidosService } from './meus-pedidos.service';
import { DatePipe } from '@angular/common';
import { PedidosService } from 'app/modules/admin/pedidos/pedidos.service';

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
        'data',
        'produto',
        'status',
        'endereco',
        'actions',
    ];

    searchText: string = '';

    constructor(
        private _pedidosService: PedidosService,
        private _matDialog: MatDialog,
        private _route: ActivatedRoute,
        private datePipe: DatePipe
    ) {}

    ngOnInit(): void {
        this._pedidosService.pedidos$.subscribe((response) => {
            console.log('resposta',response);
            this.originalPedidosList = response;
            console.log(this.originalPedidosList);
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
                        produto.statusPedido.toLowerCase().includes(searchTextLower)
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
