import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachDashboardComponent } from './components/coach-dashboard/coach-dashboard.component';
import { CoachHomeComponent } from './components/coach-home/coach-home.component';


@NgModule({
  declarations: [
    CoachDashboardComponent,
    CoachHomeComponent
  ],
  imports: [
    CommonModule,
    CoachRoutingModule
  ]
})
export class CoachModule { }
