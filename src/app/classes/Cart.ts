import { BehaviorSubject } from 'rxjs';
import { Book } from '../interfaces/Book';
import { BookCart } from './LineCartItem';
import { BookDataService } from '../book-data.service';
import { Inject } from '@angular/core';

export class Cart {
	id: number;
	private _linesCart: BookCart[];
	linesCart: BehaviorSubject<BookCart[]>;
	@Inject(BookDataService)
	bookDataService!: BookDataService;

	constructor(
		id: number,
	) {
		this.id = id;
		this._linesCart = [];
		this.linesCart = new BehaviorSubject(this._linesCart);
	}
	
	finalizarCompra(){
		this._linesCart.forEach(lineItemCart => {
			lineItemCart.book.stock -= lineItemCart.cantidad;
		});
		this._linesCart = [];
		this.linesCart.next(this._linesCart);
	}

	addElementToCart(book: Book) { 
		let index = this.findIndexBookById(book.id);

		if (index == -1) {
			this._linesCart.push(new BookCart(book, 1));
		} else {
			this._linesCart[index].updateCantidad(1);
		}
		this.linesCart.next(this._linesCart);
	}

	removeElementToCart(book: Book) {
		let index = this.findIndexBookById(book.id);
		if (index != -1 && this._linesCart[index].cantidad == 1) {
			this._linesCart.splice(index, 0);
		} else {
			this._linesCart[index].updateCantidad(-1);
		}
		this.linesCart.next(this._linesCart);
	}

	get_linesCart(): BookCart[] {
		return this._linesCart;
	}

	getTotalPrice(): number {
		let totalPrice = 0;
		this._linesCart.forEach(lineCartItem => {
			totalPrice += lineCartItem.getTotalPrice();
		});

		return totalPrice;
	}

	getCantidad(idBook: number): number {
		let index = this.findIndexBookById(idBook);
		if (index == -1) 
			return 0;
		else
			return this._linesCart[index].cantidad;
	}

	findIndexBookById(id: number): number {
		return this._linesCart.findIndex(line => line.book.id === id);
	}

	carritoVacio(): boolean {
		return this._linesCart.length == 0;
	}
}