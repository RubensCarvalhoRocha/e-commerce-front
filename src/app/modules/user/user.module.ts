import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosAVendaComponent } from './produtos-a-venda/produtos-a-venda.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';



@NgModule({
  declarations: [
    ProdutosAVendaComponent,
    CarrinhoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
