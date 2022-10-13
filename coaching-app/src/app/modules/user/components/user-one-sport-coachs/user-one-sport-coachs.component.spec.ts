import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOneSportCoachsComponent } from './user-one-sport-coachs.component';

describe('UserOneSportCoachsComponent', () => {
  let component: UserOneSportCoachsComponent;
  let fixture: ComponentFixture<UserOneSportCoachsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOneSportCoachsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOneSportCoachsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
