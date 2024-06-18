import { Book } from '../interfaces/Book';
import { BookCart } from './LineCartItem';

export class Cart {
	id: number;
	linesCart: BookCart[];

	constructor(
		id: number,
	) {
		this.id = id;
		this.linesCart = [];
	}

	getTotalPrice(): number {
		let totalPrice = 0;
		this.linesCart.forEach(lineCartItem => {
			totalPrice += lineCartItem.getTotalPrice();
		});

		return totalPrice;
	}

	updateCantidad(book: Book, cantToAdd: number): void {
		let index = this.findIndexBookById(book.id);

		if (index == -1 && cantToAdd > 0) {
			this.linesCart.push(new BookCart(book, 1));
		} else if (index != -1 && this.linesCart[index].cantidad == 1 && cantToAdd < 0) {
			this.linesCart.splice(index, 1);
			return;
		} else {
			let bookCart = this.linesCart[index];
			let cantActual = bookCart.cantidad;

			if ( 
				bookCart.book.stock > cantActual && cantToAdd > 0 ||
				bookCart.book.stock >= cantActual && cantToAdd < 0
			) {
				bookCart.cantidad += cantToAdd;
			}
		}
	}

	getCantidad(idBook: number): number {
		let index = this.findIndexBookById(idBook);
		if (index == -1) 
			return 0;
		else
			return this.linesCart[index].cantidad;
	}

	findIndexBookById(id: number): number {
		return this.linesCart.findIndex(line => line.book.id === id);
	}

	findBookById(id: number): BookCart | undefined {
		return this.linesCart.find(line => line.book.id === id);
	}
}