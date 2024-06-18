import { Book } from '../interfaces/Book';

export class BookCart {
	book: Book;
	cantidad: number;

	constructor(
		book: Book,
		cantidad: number,
	) {
		this.book = book;
		this.cantidad = cantidad;
	}

	updateCantidad(cantToAdd: number): void {
		this.cantidad += cantToAdd;
	}

	getTotalPrice(): number {
		return (this.book.precio - (this.book.porcentajeDescuento * this.book.precio)) * this.cantidad;
	}
}