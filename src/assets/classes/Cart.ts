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

    updateCantidad(book: Book, cantToAdd: number): void {
        let index = this.findIndexBookById(book.id);

        if (index == -1 && cantToAdd > 0)  {
            this.lineCart.push(new BookCart(book, 1));
        } else if (index != -1 && this.lineCart[index].cantidad == 1 && cantToAdd < 0) {
            this.lineCart.splice(index, 1);
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

    getCantidad(idBook: number): number {
        let index = this.findIndexBookById(idBook);
        if (index == -1) 
            return 0;
        else
            return this.lineCart[index].cantidad;
    }

    findIndexBookById(id: number): number {
        return this.lineCart.findIndex(line => line.book.id === id);
    }

    findBookById(id: number): BookCart | undefined {
        return this.lineCart.find(line => line.book.id === id);
    }
}