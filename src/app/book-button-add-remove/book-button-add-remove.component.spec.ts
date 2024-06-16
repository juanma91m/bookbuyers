import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookButtonAddRemoveComponent } from './book-button-add-remove.component';

describe('BookButtonAddRemoveComponent', () => {
  let component: BookButtonAddRemoveComponent;
  let fixture: ComponentFixture<BookButtonAddRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookButtonAddRemoveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookButtonAddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
