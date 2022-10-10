import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowCoachsComponent } from './user-show-coachs.component';

describe('UserShowCoachsComponent', () => {
  let component: UserShowCoachsComponent;
  let fixture: ComponentFixture<UserShowCoachsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShowCoachsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserShowCoachsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
