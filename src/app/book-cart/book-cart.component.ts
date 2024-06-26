import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';

@Component({
	selector: 'app-book-cart',
	templateUrl: './book-cart.component.html',
	styleUrl: './book-cart.component.scss'
})
export class BookCartComponent {
	cartService: BookCartService;

	constructor(cartService: BookCartService) {
		this.cartService = cartService;
	}
}
