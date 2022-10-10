import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashbordComponent,
    children: [
      {
        path:'home',component:AdminHomeComponent
      },
      {
        path: '',
        redirectTo: '/admin/home', pathMatch:'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
