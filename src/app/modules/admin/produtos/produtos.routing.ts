import { ProdutosComponent } from './produtos-lista/produtos.component';
import { ResolverProdutos } from './produtos.resolver';
import { Route } from '@angular/router';

export const produtosRoutes: Route[] = [
    {
        path: '',
        component: ProdutosComponent,
        resolve: { ResolverProdutos },
        children: [
            {
                path: ':id',
                component: ProdutoComponent,
                resolve: {},
            },
        ],
    },
];
