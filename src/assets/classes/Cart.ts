import { Book } from '../interfaces/Book';
import { BookCart } from './BookCart';

export class Cart {
    id: number;
    lineCart: BookCart[];

    constructor(
        id: number,
    ) {
        this.id = id;
        this.lineCart = [];
    }

    updateCantidad(id: number, cantToAdd: number): void {
        let index = this.findIndexBookById(id);
  
        if (index == -1) {
            return;
        } else {
            let bookCart = this.lineCart[index];
            let cantActual = bookCart.cantidad;

            if ( 
                bookCart.book.stock > cantActual && cantToAdd > 0 ||
                bookCart.book.stock >= cantActual && cantToAdd < 0
            ) {
                bookCart.cantidad += cantToAdd;
            }
        }
    }

    findIndexBookById(id: number): number {
        return this.lineCart.findIndex(line => line.book.id === id);
    }

    findBookById(id: number): BookCart | undefined {
        return this.lineCart.find(line => line.book.id === id);
    }
}