import { Component } from '@angular/core';
import { Book } from '../../assets/interfaces/Book';
import { Cart } from '../../assets/classes/Cart';
import { BookCartService } from '../book-cart.service';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrl: './book-list.component.scss',
})
export class BookListComponent {
	books: Book[] = [
		{
			id: 1,
			titulo: "Harry Potter y la Piedra Filosofal",
			autor: "J. K. Rowling",
			precio: 1000,
			porcentajeDescuento: 0,
			stock: 23,
			imagen: "assets/img/harry_potter_y_la_piedra_filosofal.jpg",
		},
		{
			id: 2,
			titulo: "El Principito",
			autor: "Antoine de Saint-Exupéry",
			precio: 720,
			porcentajeDescuento: 0.1,
			stock: 132,
			imagen: "assets/img/principito.jpg",
		},
		{
			id: 3,
			titulo: "El Conde de Montecristo",
			autor: "Alejandro Dumas",
			precio: 2300,
			porcentajeDescuento: 0,
			stock: 12,
			imagen: "assets/img/montecristo.jpg",
		},
		{
			id: 4,
			titulo: "Don Quijote de la Mancha",
			autor: "Miguel de Cervantes",
			precio: 3100,
			porcentajeDescuento: 0,
			stock: 0,
			imagen: "assets/img/quijote.jpg",
		},
	];

	cartService: BookCartService;

	constructor(cartService: BookCartService) {
		this.cartService = cartService;
	}

	updateQuantity(quantity: number, book: Book): void {
		if (quantity > 0)
			this.cartService.addElementToCart(book);
		else if (quantity < 0)
			this.cartService	.removeElementToCart(book);
	}
}
