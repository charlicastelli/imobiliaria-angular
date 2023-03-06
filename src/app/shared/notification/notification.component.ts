import { Component } from '@angular/core';

import { NotificationMessageService } from './../../components/service/notification-message/notification-message.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  constructor(public notificationMessageService: NotificationMessageService) { }
}
