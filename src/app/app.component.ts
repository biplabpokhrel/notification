import { Component } from '@angular/core';
import { Notification } from 'nusa-notifier';

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
    this.notification.notice = 'This is actually working';
    this.notification.layout.title.status = 'hide';
   // console.log(this.notification.layout.titleType.status);
   // this.notification.notice.layout.titleType.status = 'hide';
  }

  clickMe() {
    this.notification.show();
    // this.notification.status = this.notification.status === 'activate' ? 'deactivate' : 'activate';
  }
}
