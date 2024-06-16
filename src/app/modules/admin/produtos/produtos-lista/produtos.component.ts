import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'app/model/Produto';
import notyf from 'app/utils/utils';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
        itens: Produto[] = [];

        origialProdutosList: Produto[] = [];
        produtosList: MatTableDataSource<Produto>;

        @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

        displayedColumns: string[] = [
            'name',
            'description',
            'price',
            'quantity',
            'actions',
            // 'image',
        ];

        searchText: string = '';

        constructor(private _service: ProdutosService) {}

        ngOnInit(): void {
            this._service._produtos$.subscribe((response) => {
                this.origialProdutosList = response;
                this.produtosList = new MatTableDataSource(
                    this.origialProdutosList
                );
                this.produtosList.paginator = this.paginator;
            });
        }

        produtosFilter(text: string, applyFilter: boolean = true) {
            this.searchText = text;
            if (applyFilter) {
                const searchTextLower = this.searchText.trim().toLowerCase();
                this.produtosList.data = this.origialProdutosList.filter(
                    (produto) => {
                        return (
                            searchTextLower === '' ||
                            produto.name
                                .toLowerCase()
                                .includes(searchTextLower) ||
                            produto.description
                                .toLowerCase()
                                .includes(searchTextLower)
                        );
                    }
                );
            }
        }


        teste(){
            notyf.success('Teste');
        }
    }
