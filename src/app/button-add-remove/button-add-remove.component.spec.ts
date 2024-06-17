import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddRemoveComponent } from './button-add-remove.component';

describe('ButtonAddRemoveComponent', () => {
  let component: ButtonAddRemoveComponent;
  let fixture: ComponentFixture<ButtonAddRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAddRemoveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
