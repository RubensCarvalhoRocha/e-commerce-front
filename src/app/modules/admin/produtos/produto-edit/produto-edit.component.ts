import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from 'app/model/Produto';
import { ProdutosService } from '../produtos.service';
import { FuseUtilsService } from '@fuse/services/utils';
import notyf from 'app/utils/utils';

@Component({
    selector: 'app-produto-edit',
    templateUrl: './produto-edit.component.html',
    styleUrls: ['./produto-edit.component.scss'],
})
export class ProdutoEditComponent implements OnInit {
    public produto: Produto = new Produto();

    constructor(
        private readonly _changeDetectorRef: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data,
        private _dialogRef: MatDialogRef<ProdutoEditComponent>,
        private readonly _produtosService: ProdutosService,
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Métodos de ciclo de vida dos componentes
    // -----------------------------------------------------------------------------------------------------
    ngOnInit(): void {
        if (this.data && this.data.produto)
            this.produto =
                this.data.produto;
    }

    // -------------------------------------------------------------------
    // @ Métodos de ciclo de vida dos componentes
    // -------------------------------------------------------------------
    cancelar(): void {
        this._dialogRef.close();
    }

    salvar(): void {
        this._produtosService
            .salvarProduto(
                this.produto,
            )
            .subscribe({
                next: () => {
                    this._dialogRef.close(true);
                    notyf.success('Produto salvo com sucesso');
                },
                error: (error) => {
                    notyf.error('Algo deu errado! Tente novamente.');
                    console.error(error);
                },
            });
    }
}
