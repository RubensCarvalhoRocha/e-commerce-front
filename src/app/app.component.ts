import { Component } from '@angular/core';
import { CarrinhoService } from './modules/user/carrinho/carrinho.service';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    /**
     * Constructor
     */
    constructor(
        private _carrinhoService: CarrinhoService
    )
    {
        this._carrinhoService.carregarCarrinho();
    }
}


