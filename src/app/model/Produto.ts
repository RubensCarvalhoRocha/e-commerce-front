export class   Produto {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;

    constructor(produto?: Partial<Produto>) {
        if (produto) {
            Object.assign(this, produto);
        }
    }
}
