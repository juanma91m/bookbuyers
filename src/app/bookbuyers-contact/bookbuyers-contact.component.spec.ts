import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbuyersContactComponent } from './bookbuyers-contact.component';

describe('BookbuyersContactComponent', () => {
	let component: BookbuyersContactComponent;
	let fixture: ComponentFixture<BookbuyersContactComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BookbuyersContactComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(BookbuyersContactComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
