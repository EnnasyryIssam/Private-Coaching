import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { UserShowCoachsComponent } from './components/user-show-coachs/user-show-coachs.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserCoachsProgramsComponent } from './components/user-coachs-programs/user-coachs-programs.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserHomeComponent,
    UserSidebarComponent,
    UserShowCoachsComponent,
    UserSettingsComponent,
    UserCoachsProgramsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
