import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCoachInfoComponent } from './components/user-coach-info/user-coach-info.component';
import { UserCoachPaymentComponent } from './components/user-coach-payment/user-coach-payment.component';
import { UserCoachProgramDetailsComponent } from './components/user-coach-program-details/user-coach-program-details.component';
import { UserCoachsProgramsComponent } from './components/user-coachs-programs/user-coachs-programs.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserOneSportCoachsComponent } from './components/user-one-sport-coachs/user-one-sport-coachs.component';
import { UserPaymentValidationComponent } from './components/user-payment-validation/user-payment-validation.component';
import { UserSecondCoachInfoComponent } from './components/user-second-coach-info/user-second-coach-info.component';
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
        path:'coach-info',component:UserCoachInfoComponent
      },
      {
        path:'coach2-info',component:UserSecondCoachInfoComponent
      },
      {
        path:'one-sport-coachs',component:UserOneSportCoachsComponent
      },
      {
        path:'user-payment',component:UserCoachPaymentComponent
      },
      {
        path:'user-payment-validation',component:UserPaymentValidationComponent
      },
      {
        path:'coach-program',component:UserCoachsProgramsComponent
      },
      {
        path:'coach-program-details',component:UserCoachProgramDetailsComponent
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
