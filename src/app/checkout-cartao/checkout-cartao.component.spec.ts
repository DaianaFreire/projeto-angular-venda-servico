import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCartaoComponent } from './checkout-cartao.component';

describe('CheckoutCartaoComponent', () => {
  let component: CheckoutCartaoComponent;
  let fixture: ComponentFixture<CheckoutCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutCartaoComponent]
    });
    fixture = TestBed.createComponent(CheckoutCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
