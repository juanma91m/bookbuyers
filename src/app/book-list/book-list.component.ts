import { Component } from '@angular/core';
import { Book } from '../interfaces/Book';

import { BookCartService } from '../book-cart.service';
import { BookStockService } from '../book-stock.service';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrl: './book-list.component.scss',
})
export class BookListComponent {

	bookStockService: BookStockService;
	cartService: BookCartService;

	constructor(cartService: BookCartService, bookStockService: BookStockService) {
		this.cartService = cartService;
		this.bookStockService = bookStockService;
	}

	updateQuantity(quantity: number, book: Book): void {
		if (quantity > 0)
			this.cartService.cart.addElementToCart(book);
		else if (quantity < 0)
			this.cartService.cart.removeElementToCart(book);
	}
}
