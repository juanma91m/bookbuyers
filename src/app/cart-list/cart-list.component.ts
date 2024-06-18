import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { BookCart } from '../classes/LineCartItem';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-cart-list',
	templateUrl: './cart-list.component.html',
	styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
	cartService: BookCartService;
	linesCart$: Observable<BookCart[]>;

	constructor(cartService: BookCartService) {
		this.linesCart$ = cartService.cart.linesCart.asObservable();
		this.cartService = cartService;
	}
}
