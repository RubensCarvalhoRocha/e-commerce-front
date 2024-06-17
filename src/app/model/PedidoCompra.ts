export class PedidoCompra {
    pedidoCompra: {
        produtoId: number;
        quantidade: number;
    }[];

    constructor(pedidoCompra?: Partial<PedidoCompra>) {
        if (pedidoCompra) {
            Object.assign(this, pedidoCompra);
        }
    }
}
