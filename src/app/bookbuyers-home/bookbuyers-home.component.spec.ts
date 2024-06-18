import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbuyersHomeComponent } from './bookbuyers-home.component';

describe('BookbuyersHomeComponent', () => {
	let component: BookbuyersHomeComponent;
	let fixture: ComponentFixture<BookbuyersHomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BookbuyersHomeComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(BookbuyersHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
