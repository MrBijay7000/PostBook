import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngulatMaterialModule } from '../angular-material.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.componet';
import { SingUpComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SingUpComponent],
  imports: [
    AngulatMaterialModule,
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
