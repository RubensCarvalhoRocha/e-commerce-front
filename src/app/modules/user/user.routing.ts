import { Route } from "@angular/router";
import { ProdutosAVendaComponent } from "./produtos-a-venda/produtos-a-venda.component";
import { ProdutoComponent } from "./produtos-a-venda/produto/produto.component";

export const userRoutes: Route[] = [
    {
        path: '',
        component: ProdutosAVendaComponent,
        resolve: {},
        children: [
            {
                path: ':id',
                component: ProdutoComponent,
                resolve: {

                },
            },
        ],
    },
];
