import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import notyf from 'app/utils/utils';
import { PedidosService } from '../pedidos.service';
import { Pedido } from 'app/model/Pedido';

@Component({
    selector: 'app-pedido-edit',
    templateUrl: './pedido-edit.component.html',
    styleUrls: ['./pedido-edit.component.scss'],
})
export class PedidoEditComponent implements OnInit {
    public pedido: Pedido = new Pedido();

    constructor(
        private readonly _changeDetectorRef: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data,
        private _dialogRef: MatDialogRef<PedidoEditComponent>,
        private readonly _pedidosService: PedidosService,
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Métodos de ciclo de vida dos componentes
    // -----------------------------------------------------------------------------------------------------
    ngOnInit(): void {
        if (this.data && this.data.pedido)
            this.pedido =
                this.data.pedido;
    }

    // -------------------------------------------------------------------
    // @ Métodos de ciclo de vida dos componentes
    // -------------------------------------------------------------------
    cancelar(): void {
        this._dialogRef.close();
    }

    salvar(): void {
        this._pedidosService
            .salvarPedido(
                this.pedido,
            )
            .subscribe({
                next: () => {
                    this._dialogRef.close(true);
                    notyf.success('Pedido atualizado com sucesso');
                },
                error: (error) => {
                    notyf.error('Algo deu errado! Tente novamente.');
                    console.error(error);
                },
            });
    }
}
