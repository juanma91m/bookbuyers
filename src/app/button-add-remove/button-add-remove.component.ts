import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../assets/interfaces/Book';
import { Cart } from '../../assets/classes/Cart';
import { BookCart } from '../../assets/classes/BookCart';

@Component({
	selector: 'app-button-add-remove',
	templateUrl: './button-add-remove.component.html',
	styleUrl: './button-add-remove.component.scss'
})
export class ButtonAddRemoveComponent {
	@Input() cart: Cart = new Cart(0);
	@Input() book: Book = {
		id: 0,
		titulo: "",
		autor: "",
		precio: 0,
		porcentajeDescuento: 0,
		stock: 0,
		imagen: "",
	};

	clickRemove(): void {
		let index = this.cart.findIndexBookById(this.book.id);
		if (this.cart.lineCart[index].cantidad > 0)
			this.cart.updateCantidad(this.book.id, -1);
		
		if (this.cart.lineCart[index].cantidad == 0)
			this.cart.lineCart.splice(index, 1);
	}

	clickAdd(): void {
		let index = this.cart.findIndexBookById(this.book.id);
		if (index == -1) {
			this.cart.lineCart.push(new BookCart(this.book,0));
		}

		this.cart.updateCantidad(this.book.id, 1);
	}
}
