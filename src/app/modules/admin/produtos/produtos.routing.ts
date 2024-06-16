import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutosComponent } from './produtos-lista/produtos.component';
import { ResolverProduto, ResolverProdutos } from './produtos.resolver';
import { Route } from '@angular/router';

export const produtosRoutes: Route[] = [
    {
        path: '',
        component: ProdutosComponent,
        resolve: { ResolverProdutos },
        children: [
            {
                path: ':id',
                component: ProdutoEditComponent,
                resolve: {
                    ResolverProduto
                },
            },
        ],
    },
];
