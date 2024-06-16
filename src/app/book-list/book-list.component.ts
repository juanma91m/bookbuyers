import { Component } from '@angular/core';
import { Book } from '../../assets/interfaces/Book';

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
			porcentajeDescuento: 0,
			precio: 1000,
			stock: 23,
			imagen: "assets/img/harry_potter_y_la_piedra_filosofal.jpg",
			cantidad:0,
		},
		{
			id: 2,
			titulo: "El Principito",
			autor: "Antoine de Saint-Exupéry",
			precio: 720,
			porcentajeDescuento: 10,
			stock: 132,
			imagen: "assets/img/principito.jpg",
			cantidad:0,
		},
		{
			id: 3,
			titulo: "El Conde de Montecristo",
			autor: "Alejandro Dumas",
			porcentajeDescuento: 0,
			precio: 2300,
			stock: 12,
			imagen: "assets/img/montecristo.jpg",
			cantidad:0,
		},
		{
			id: 4,
			titulo: "Don Quijote de la Mancha",
			autor: "Miguel de Cervantes",
			precio: 3100,
			porcentajeDescuento: 0,
			stock: 0,
			imagen: "assets/img/quijote.jpg",
			cantidad:0,
		},
	];

	updateCantidad(book: Book, cantidad: number) {
		this.books.forEach(bookInBooks => {
			if ( 
				(bookInBooks.id == book.id) &&
				(
					(bookInBooks.stock > bookInBooks.cantidad && cantidad > 0) ||
					(bookInBooks.stock >= bookInBooks.cantidad && cantidad < 0)
				)
			) {
				bookInBooks.cantidad +=cantidad;
			}
		});
	}
}
