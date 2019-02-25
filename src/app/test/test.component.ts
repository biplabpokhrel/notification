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
  notificationSuccess: Notification = new Notification();
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
   // this.notificationSuccess = new Notification();
    this.notificationSuccess.type = 'success';
    this.notificationSuccess.layout.closeButton.status = 'show';
    this.notificationSuccess.notice = `Oh that's awesome`;
    // this.notificationSuccess.timer = { duration: 3000 };
    this.notificationSuccess.show();
  //  this.notificationSuccess.status = 'activate';
  }

  clickMeHelpShow() {
  //  this.notificationHelp.notice = 'This is your help page';
    this.notificationHelp.layoutType = 'multi';
    this.notificationHelp.notices = ['apple', 'orrange'];
    this.notificationHelp.show();

  }

  clickMeHelpHide() {
    this.notificationHelp.hide();
  }

  clickMeErrorShow() {
    this.notificationError.show();
  }

  clickMeErrorHide() {
    this.notificationError.hide();
  }

  clickMeNoteShow() {
    this.notificationNote.layoutType = 'multi';
    this.notificationNote.notices = ['apple', 'orrange'];
   // this.notificationNote.layout['head'] = 'hello';
    this.notificationNote.show();
  }

  clickMeNoteHide() {
    this.notificationNote.hide();
  }

  clickMeWarnShow() {
    this.notificationWarn.show();
  }

  clickMeWarnHide() {
    this.notificationWarn.hide();
  }

  clickMeSuccessShow() {
    this.notificationSuccess.notice = 'Hello world';
    this.notificationSuccess.layout.closeButton.status = 'hide';
    // this.notificationSuccess.timer = { duration: 3000 };
    this.notificationSuccess.show();
  }

  clickMeSuccessHide() {
    this.notificationSuccess.notice = 'Hello world 2';
    this.notificationSuccess.hide();
  }

}
