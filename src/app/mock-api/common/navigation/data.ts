/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthUtils } from 'app/core/auth/auth.utils';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const compactNavigation: FuseNavigationItem[] = [

    //Abertas:
    {
        id: 'produtos-a-venda',
        title: 'Produtos',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/produtos-a-venda',
        hidden: (item: FuseNavigationItem) => {
            const role = AuthUtils.getUserRole();
            return !(role === 'ROLE_CLIENTE');
        },
    },

    {
        id: 'carrinho',
        title: 'Carrinho de Comparas',
        type: 'basic',
        icon: 'mat_outline:shopping_cart',
        link: '/carrinho',
        hidden: (item: FuseNavigationItem) => {
            const role = AuthUtils.getUserRole();
            return !(role === 'ROLE_CLIENTE');
        },

    },




    // Admin:
    {
        id   : 'produtos',
        title: 'Gerenciar Produtos',
        type : 'basic',
        icon : 'mat_solid:manage_search',
        link : '/produtos',
        hidden: (item: FuseNavigationItem) => {
            const role = AuthUtils.getUserRole();
            return !(role === 'ROLE_ADMIN');
        },
    },

    {
        id   : 'pedidos',
        title: 'Gerenciar Pedidos',
        type : 'basic',
        icon : 'mat_solid:delivery_dining',
        link : '/pedidos',
        hidden: (item: FuseNavigationItem) => {
            const role = AuthUtils.getUserRole();
            return !(role === 'ROLE_ADMIN');
        },
    },

    {
        id: 'sair',
        title: '',
        type: 'basic',
        icon: 'power_settings_new',
        link: '/sign-out',
    },

];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
