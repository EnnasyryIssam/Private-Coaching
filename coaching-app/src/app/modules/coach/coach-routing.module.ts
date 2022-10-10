import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachDashboardComponent } from './components/coach-dashboard/coach-dashboard.component';
import { CoachHomeComponent } from './components/coach-home/coach-home.component';

const routes: Routes = [
  {
    path: '',
    component: CoachDashboardComponent,
    children: [
      {
        path:'home',component:CoachHomeComponent
      },
      {
        path: '',
        redirectTo: '/coach/home', pathMatch:'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
