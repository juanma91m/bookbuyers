import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';

@Component({
	selector: 'app-cart-list',
	templateUrl: './cart-list.component.html',
	styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
	cartService: BookCartService;

	constructor(cartService: BookCartService) {
		this.cartService = cartService;
	}
}
