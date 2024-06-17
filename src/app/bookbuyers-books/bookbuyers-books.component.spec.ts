import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbuyersBooksComponent } from './bookbuyers-books.component';

describe('BookbuyersBooksComponent', () => {
  let component: BookbuyersBooksComponent;
  let fixture: ComponentFixture<BookbuyersBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookbuyersBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookbuyersBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
