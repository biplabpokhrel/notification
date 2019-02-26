import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NusaNotifierComponent } from './nusa-notifier/nusa-notifier.component';
import { NusaNotificationComponent } from './nusa-notification/nusa-notification.component';
import { NusaNotificationsComponent } from './nusa-notifications/nusa-notifications.component';

@NgModule({
  declarations: [
    NusaNotifierComponent,
    NusaNotificationComponent,
    NusaNotificationsComponent],
  imports: [
    CommonModule
  ],
  exports: [NusaNotifierComponent]
})
export class NusaNotifierModule { }
