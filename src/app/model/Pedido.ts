export class Endereco {
    id?: number;
    rua?: string;
    numero?: string;
    complemento?: string | null;
    bairro?: string;
    cidade?: string;
    cep?: string;

    constructor(endereco?: Partial<Endereco>) {
      if (endereco) {
        Object.assign(this, endereco);
      }
    }
  }

  export class Pessoa {
    id?: number;
    nome?: string;
    cpf?: string;
    dataNascimento?: string;
    endereco?: Endereco;

    constructor(pessoa?: Partial<Pessoa>) {
      if (pessoa) {
        Object.assign(this, pessoa);
      }
    }
  }

  export class Usuario {
    id?: number;
    email?: string;
    senha?: string;
    pessoa?: Pessoa;
    perfil?: string;

    constructor(usuario?: Partial<Usuario>) {
      if (usuario) {
        Object.assign(this, usuario);
      }
    }
  }

  export class Pedido {
    id?: number;
    produtoId?: number;
    quantidade?: number;
    statusPedido?: string;
    status?: boolean;
    dataHora?: string;
    dataHoraUltimaAlteracao?: string | null;
    usuario?: Usuario;

    constructor(pedido?: Partial<Pedido>) {
      if (pedido) {
        Object.assign(this, pedido);
      }
    }
  }
