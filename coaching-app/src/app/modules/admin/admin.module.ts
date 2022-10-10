import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';


@NgModule({
  declarations: [
    AdminDashbordComponent,
    SideBarComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
