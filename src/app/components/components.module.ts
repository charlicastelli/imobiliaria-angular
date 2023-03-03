import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [LoginComponent, HomePageComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AngularMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ComponentsModule {}
