import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiUrl } from './shared/api/api-url';
import { AuthenticationService } from './components/service/authentication/authentication.service';
import { AuthGuard } from './shared/auth-guard/auth.guard';
import { Router } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
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
