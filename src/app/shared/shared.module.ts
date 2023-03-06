import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationErrorComponent } from './notification-error/notification-error.component';

@NgModule({
  declarations: [NotificationComponent, NotificationErrorComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [NotificationComponent, NotificationErrorComponent],
})
export class SharedModule {}
