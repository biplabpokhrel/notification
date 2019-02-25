import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { SingleNotifier } from '../classes/notifier.layout';
import { Message } from '../classes/notifer.message';
@Component({
  selector: 'app-nusa-notification',
  templateUrl: './notification.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() layout: SingleNotifier;
  @Input() notice: Message;
  @Input() type: string;
  @Output() close: EventEmitter<boolean>;

  constructor() {
    this.close = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  get hideClose(): boolean {
    if (this.layout && this.layout.closeButton.status === 'hide') {
      return true;
    }
    return false;
  }


}
