export class PedidoCompra {
    pedidoCompra: {
        medicamentoId: number;
        quantidade: number;
    }[];

    constructor(pedidoCompra?: Partial<PedidoCompra>) {
        if (pedidoCompra) {
            Object.assign(this, pedidoCompra);
        }
    }
}
