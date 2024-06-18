import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';

@Component({
	selector: 'app-bookbuyers-cart',
	templateUrl: './bookbuyers-cart.component.html',
	styleUrl: './bookbuyers-cart.component.scss'
})
export class BookbuyersCartComponent {
	cartService: BookCartService;

	constructor(cartService: BookCartService) {
		this.cartService = cartService;
	}

	finalizarCompra() {
		this.cartService.cart.finalizarCompra();
		alert('Su pedido fue procesado con éxito,\n¡Muchas gracias por su compra!');
	}
}
