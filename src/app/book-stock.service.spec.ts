import { TestBed } from '@angular/core/testing';

import { BookStockService } from './book-stock.service';

describe('BookStockService', () => {
	let service: BookStockService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(BookStockService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
