import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbuyersCartComponent } from './bookbuyers-cart.component';

describe('BookbuyersCartComponent', () => {
	let component: BookbuyersCartComponent;
	let fixture: ComponentFixture<BookbuyersCartComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BookbuyersCartComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(BookbuyersCartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
