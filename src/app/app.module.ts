import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AuthenticationService } from './components/service/authentication/authentication.service';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { ApiUrl } from './shared/api/api-url';
import { AuthGuard } from './shared/auth-guard/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [
    ApiUrl, //inserido ApiUrl pois estava dando um erro de provedor
    AuthenticationService,
    {
      provide: AuthGuard,
      useFactory: AuthGuard,
      deps: [AuthenticationService, Router],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
