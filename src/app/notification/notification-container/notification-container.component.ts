import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Notifier, Notification } from '../classes/notifier.event';
import { MultiNotifier, SingleNotifier } from '../classes/notifier.layout';
import { Message } from '../classes/notifer.message';

@Component({
  selector: 'app-nusa-notifier',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.css']
})
export class NotificationContainerComponent implements OnInit {

  @Input() customTemplate: TemplateRef<any>;

  @Input() notification: Notification;
  notifier: Notifier;

  constructor() {

  }

  ngOnInit() {
    if (this.notification) {
      this.notifier = new Notifier(this.notification);
    }
  }

  close() {
    this.notifier.deactivate();
  }

  icon(messageType: string): string {
    return `../../../assets/icons/${messageType}.svg`;
  }

  get status(): boolean {
    if (this.notifier.isActive && this.timer) {
      setTimeout(() => {
        this.close();
      } , this.timer);
    }
    return this.notifier.isActive;
  }

  get timer(): number | null {
    if ( this.notifier.notice.timer ) {
      return this.notifier.notice.timer.duration;
    }
    return null;
  }

  get notice(): Message | null {
    if ( this.layout === 'single' ) {
      return <Message>this.notifier.notice.data;
    }
    return null;
  }

  get notices(): Message[] | null {
    if ( this.layout === 'multi' ) {
      return <Message[]>this.notifier.notice.data;
    }
    return null;
  }

  get layout(): 'single'|'multi'| null {
    if ( this.notifier.notice.layout instanceof MultiNotifier) {
      return 'multi';
    } else if ( this.notifier.notice.layout instanceof SingleNotifier) {
      return 'single';
    } else {
      return null;
    }
  }

}
