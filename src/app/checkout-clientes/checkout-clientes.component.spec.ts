import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutClientesComponent } from './checkout-clientes.component';

describe('CheckoutClientesComponent', () => {
  let component: CheckoutClientesComponent;
  let fixture: ComponentFixture<CheckoutClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutClientesComponent]
    });
    fixture = TestBed.createComponent(CheckoutClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
