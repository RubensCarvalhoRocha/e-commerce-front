/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

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

    {
        id   : 'produtos',
        title: 'Gerenciar Produtos',
        type : 'basic',
        icon : 'mat_solid:manage_search',
        link : '/produtos'
    },

    {
        id   : 'pedidos',
        title: 'Gerenciar Pedidos',
        type : 'basic',
        icon : 'mat_solid:delivery_dining',
        link : '/pedidos'
    },

    {
        id: 'sair',
        title: 'Sair',
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
