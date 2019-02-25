import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Notifier, Notification } from '../classes/notifier.event';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() notification: Notification;
  notifier: Notifier;

  constructor() {

  }

  ngOnInit() {
    this.notifier = new Notifier(this.notification);
  }

  close() {
    this.notifier.deactivate();
  }

  icon(messageType: string): string {
    return `../../../assets/icons/${messageType}.svg`;
  }

  get closeIcon(): string {
    return this.icon('close');
  }


}
