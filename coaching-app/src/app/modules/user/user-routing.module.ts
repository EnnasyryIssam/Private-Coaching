import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCoachsProgramsComponent } from './components/user-coachs-programs/user-coachs-programs.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserShowCoachsComponent } from './components/user-show-coachs/user-show-coachs.component';

const routes: Routes = [{
  path: '',
    component: UserDashboardComponent,
    children: [
      {
        path:'home',component:UserHomeComponent
      },
      {
        path:'showcoachs',component:UserShowCoachsComponent
      },
      {
        path:'coach-program',component:UserCoachsProgramsComponent
      },
      {
        path:'user-settings',component:UserSettingsComponent
      },
      {
        path: '',
        redirectTo: '/user/home', pathMatch:'full'
      },
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
