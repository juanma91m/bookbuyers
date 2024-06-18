import { Injectable } from '@angular/core';
import { Cart } from '../assets/classes/Cart';
import { Book } from '../assets/interfaces/Book';
import { BookCart } from '../assets/classes/LineCartItem';

@Injectable({
	providedIn: 'root'
})
export class BookCartService {

	cart: Cart = new Cart(1);

	addElementToCart(book: Book) {
		let index = this.cart.findIndexBookById(book.id);

		if (index == -1) {
			this.cart.linesCart.push(new BookCart(book, 1));
			return;
		} else
			this.updateCantidad(book, 1);
	}

	removeElementToCart(book: Book) {
		let index = this.cart.findIndexBookById(book.id);
		if (index != -1 && this.cart.linesCart[index].cantidad == 1) {
			this.cart.linesCart.splice(index, 1);
			return;
		} else
			this.updateCantidad(book, -1);
	}

	updateCantidad(book: Book, cantToAdd: number) {
		let index = this.cart.findIndexBookById(book.id);
		let bookCart = this.cart.linesCart[index];
		let cantActual = bookCart.cantidad;

		if ( 
			bookCart.book.stock > cantActual && cantToAdd > 0 ||
			bookCart.book.stock >= cantActual && cantToAdd < 0
		) {
			bookCart.cantidad += cantToAdd;
		}
	}
	
	constructor() { }
}
