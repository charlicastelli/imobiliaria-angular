import { Component } from '@angular/core';
import { NotificationMessageService } from 'src/app/components/service/notification-message/notification-message.service';

@Component({
  selector: 'app-notification-error',
  templateUrl: './notification-error.component.html',
  styleUrls: ['./notification-error.component.scss']
})
export class NotificationErrorComponent {
  constructor(public notificationMessageService: NotificationMessageService) { }
}
