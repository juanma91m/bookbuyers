import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/Book';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit{

	bookDataService: BookDataService;
	cartService: BookCartService;
	books!: Observable<Book[]>;

	constructor(cartService: BookCartService, bookDataService: BookDataService) {
		this.cartService = cartService;
		this.bookDataService = bookDataService;
	}

	ngOnInit(): void {
		this.books = this.bookDataService.getAll();
	}

	updateQuantity(quantity: number, book: Book): void {
		if (quantity > 0)
			this.cartService.cart.addElementToCart(book);
		else if (quantity < 0)
			this.cartService.cart.removeElementToCart(book);
	}
}
