import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { UserviewComponent } from './userview/userview.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { SidenavComponent } from './sidenav/sidenav.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'logistics',
    component: LogisticsComponent
  },
  {
    path: 'users/:id',
    component: UserviewComponent
  },
  {
    path: 'products/addproducts',
    component: AddproductsComponent
  },
  {
    path: 'sidenav',
    component: SidenavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
