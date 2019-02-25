import { Component } from '@angular/core';
import { Notification } from './notification/classes/notifier.event';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  notification: Notification;
  title = 'notifier';
  constructor() {
    this.notification = new Notification();
    this.notification.type = 'success';
  }

  clickMe() {
    this.notification.status = this.notification.status === 'activate' ? 'deactivate' : 'activate';
  }
}
