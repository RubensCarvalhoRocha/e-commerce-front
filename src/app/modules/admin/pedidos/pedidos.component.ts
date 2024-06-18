import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'app/model/Produto';
import notyf from 'app/utils/utils';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosService } from '../produtos/produtos.service';
import { Pedido } from 'app/model/Pedido';
import { PedidosService } from './pedidos.service';
import { DatePipe } from '@angular/common';
import { PedidoEditComponent } from './pedido-edit/pedido-edit.component';

@Component({
    selector: 'app-pedidos',
    templateUrl: './pedidos.component.html',
    styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
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
                (pedido) => {
                    return (
                        searchTextLower === '' ||
                        pedido.usuario.email.toLowerCase().includes(searchTextLower)
                        ||
                        pedido.nomeProduto
                            .toLowerCase()
                            .includes(searchTextLower)
                    );
                }
            );
        }
    }

    editarPedido(pedido?: Pedido): void {
        const dialogRef = this._matDialog.open(PedidoEditComponent, {
            width: '95%',
            height: 'auto',
            data: {
                pedido,
            },
        });

        dialogRef.afterClosed().subscribe((resultado: boolean) => {
            if (resultado) {
                this._pedidosService
                    .listarPedidos()
                    .subscribe({});
            }
        });
    }

    teste() {
        notyf.success('Teste');
    }
}
