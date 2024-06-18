export class PedidoCompra {
    pedidoCompra: {
        id: number;
        quantity: number;
    }[];

    constructor(pedidoCompra?: Partial<PedidoCompra>) {
        if (pedidoCompra) {
            Object.assign(this, pedidoCompra);
        }
    }
}
