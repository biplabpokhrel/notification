import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [NotificationComponent, NotificationContainerComponent, NotificationsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationContainerComponent
  ]
})
export class NotificationModule { }
