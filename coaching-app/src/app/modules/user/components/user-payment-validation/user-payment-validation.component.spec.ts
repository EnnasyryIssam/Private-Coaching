import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentValidationComponent } from './user-payment-validation.component';

describe('UserPaymentValidationComponent', () => {
  let component: UserPaymentValidationComponent;
  let fixture: ComponentFixture<UserPaymentValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPaymentValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPaymentValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
