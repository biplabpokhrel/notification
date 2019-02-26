import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MultiNotifier } from '../layout/notifier';
import { Message } from '../message/notifer';

@Component({
  selector: 'nusa-notifications',
  templateUrl: './nusa-notifications.component.html',
  styleUrls: ['./nusa-notifications.component.css']
})
export class NusaNotificationsComponent implements OnInit {

  @Input() layout: MultiNotifier;
  @Input() notices: Message[] = [];
  @Input() type: string;
  @Output() close: EventEmitter<boolean>;

  constructor() {
    this.close = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

}
