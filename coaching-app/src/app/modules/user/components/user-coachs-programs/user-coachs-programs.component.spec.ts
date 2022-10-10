import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoachsProgramsComponent } from './user-coachs-programs.component';

describe('UserCoachsProgramsComponent', () => {
  let component: UserCoachsProgramsComponent;
  let fixture: ComponentFixture<UserCoachsProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoachsProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCoachsProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
