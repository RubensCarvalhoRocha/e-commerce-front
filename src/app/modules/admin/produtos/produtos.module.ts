import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FuseCardModule } from '@fuse/components/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'app/shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { produtosRoutes } from './produtos.routing';
import { ProdutosComponent } from './produtos-lista/produtos.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoEditComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    FuseCardModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatSortModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(produtosRoutes),
  ]
})
export class ProdutosModule { }
