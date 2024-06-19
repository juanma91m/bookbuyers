import { Injectable } from '@angular/core';
import { Cart } from './classes/Cart';

@Injectable({
	providedIn: 'root'
})
export class BookCartService {
	cart: Cart;
	
	constructor() {
		this.cart = new Cart(1);
	}
}
