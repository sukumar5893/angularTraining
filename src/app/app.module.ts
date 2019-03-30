import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';
import { ScardComponent } from './scard/scard.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsertableComponent } from './usertable/usertable.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { UserviewComponent } from './userview/userview.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductServiceService } from './product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertsComponent,
    ScardComponent,
    HeadercomponentComponent,
    DashboardComponent,
    UsertableComponent,
    AnalyticsComponent,
    UsersComponent,
    ProductsComponent,
    LogisticsComponent,
    UserviewComponent,
    ShoppingComponent,
    ReactiveComponent,
    AddproductsComponent,
    SidenavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductServiceService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
