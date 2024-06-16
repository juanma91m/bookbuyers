import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPublicidadComponent } from './book-publicidad.component';

describe('BookPublicidadComponent', () => {
  let component: BookPublicidadComponent;
  let fixture: ComponentFixture<BookPublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPublicidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
