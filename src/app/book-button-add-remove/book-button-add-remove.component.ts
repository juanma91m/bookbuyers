import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../assets/interfaces/Book';

@Component({
	selector: 'app-book-button-add-remove',
	templateUrl: './book-button-add-remove.component.html',
	styleUrl: './book-button-add-remove.component.scss'
})
export class BookButtonAddRemoveComponent {
	@Input() book: Book = {id:0, titulo: '', autor: '', precio: 0, stock: 0, cantidad: 0, porcentajeDescuento: 0, imagen: '' };;
	@Input() id: number = 0;
	@Output() cantidadChange = new EventEmitter<{book: Book, cantidad: number}>();

	clickRemove(): void {
		if (this.book.cantidad > 0)
			this.cantidadChange.emit({ book: this.book, cantidad: -1});
	}

	clickAdd(): void {
		this.cantidadChange.emit({ book: this.book, cantidad: 1 });
	}
}
