export class ProdutoCarrinho {
    produtoId: number;
    quantidadeSelecionada: number;
    nome: string;
    preco: number;

    constructor(produtoCarrinho?: Partial<ProdutoCarrinho>) {
        if (produtoCarrinho) {
            Object.assign(this, produtoCarrinho);
        }
    }
}
