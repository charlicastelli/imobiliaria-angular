import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationMessageService {
  message: string = '';
  messageHeader: string = '';

  constructor() {}

  header(messageHeader: string) {
    this.messageHeader = messageHeader;
  }

  add(message: string) {
    this.message = message;

    //tempo de exibição
    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear() {
    this.message = '';
    this.messageHeader = '';
  }
}
