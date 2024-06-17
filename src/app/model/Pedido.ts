export class   Pedido {
    id?: number;
    name?: string;
    data?: string;
    quantity?: number;
    status?: string;

    constructor(pedido?: Partial<Pedido>) {
        if (pedido) {
            Object.assign(this, pedido);
        }
    }
}
