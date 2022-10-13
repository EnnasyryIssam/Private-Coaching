import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoachPaymentComponent } from './user-coach-payment.component';

describe('UserCoachPaymentComponent', () => {
  let component: UserCoachPaymentComponent;
  let fixture: ComponentFixture<UserCoachPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoachPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCoachPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
