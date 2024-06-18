import { Injectable } from '@angular/core';
import { Cart } from './classes/Cart';
import { Book } from './interfaces/Book';
import { BookCart } from './classes/LineCartItem';

@Injectable({
	providedIn: 'root'
})
export class BookCartService {

	cart: Cart = new Cart(1);
	
	constructor() { }
}
