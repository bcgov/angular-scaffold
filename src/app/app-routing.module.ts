import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { CustomerComponent } from 'app/customer/customer.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dashboard'
    }
  },
  {
    path: 'customer',
    component: CustomerComponent,
    data: {
      breadcrumb: 'Customer'
    }
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
