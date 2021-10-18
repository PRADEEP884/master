import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ WelcomeComponent} from './welcome/welcome.component';
import{ProductComponent} from './product/product.component';
import{UsersComponent} from './users/users.component';
import {AuthenticationGuard} from './authentication.guard';  

import { ProtectedComponent } from './protected/protected.component';  

const routes: Routes = [

 { path:'', redirectTo:'welcome',pathMatch:'full'},
  { path:'welcome', component: WelcomeComponent },
   { path:'product', component: ProductComponent, canActivate:[AuthenticationGuard] },
    { path:'users', component: UsersComponent },
      { path:'protected', component:ProtectedComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
