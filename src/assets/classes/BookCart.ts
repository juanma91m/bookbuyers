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
        if ( 
            this.book.stock > this.cantidad && cantToAdd > 0 ||
            this.book.stock >= this.cantidad && cantToAdd < 0
        ) {
            this.cantidad += cantToAdd;
        }
    }
}