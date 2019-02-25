import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification/classes/notifier.event';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
  notification: Notification;
  notificationHelp: Notification;
  notificationWarn: Notification;
  notificationError: Notification;
  notificationNote: Notification;
  notificationSuccess: Notification;
  constructor() { }

  ngOnInit() {
    this.notificationHelp = new Notification();
    this.notificationHelp.type = 'help';
    this.notificationWarn = new Notification();
    this.notificationWarn.type = 'warn';
    this.notificationError = new Notification();
    this.notificationError.type = 'error';
    this.notificationNote = new Notification();
    this.notificationNote.type = 'note';
    this.notificationSuccess = new Notification();
    this.notificationSuccess.type = 'success';
  }

  clickMe() {
    this.notificationHelp.status = this.notificationHelp.status === 'activate' ? 'deactivate' : 'activate';
    this.notificationWarn.status = this.notificationWarn.status === 'activate' ? 'deactivate' : 'activate';
    this.notificationError.status = this.notificationError.status === 'activate' ? 'deactivate' : 'activate';
    this.notificationNote.status = this.notificationNote.status === 'activate' ? 'deactivate' : 'activate';
    this.notificationSuccess.status = this.notificationSuccess.status === 'activate' ? 'deactivate' : 'activate';
  }

}
