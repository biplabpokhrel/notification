import { BehaviorSubject } from 'rxjs';
import { NotifcationLayout } from './notifier.layout';

interface Timer {
    duration: number;
}

export class Notification {
    type: 'warn' | 'error' | 'note' | 'success' | 'help';
    timer?: Timer;
    status: 'activate' | 'deactivate';
    layout: NotifcationLayout;
    constructor() {
        this.status = 'deactivate';
    }

}

export class Notifier {
    trigger = new BehaviorSubject<Notification>(new Notification());

    constructor(notification: Notification) {
        if (notification) {
            this.trigger.next(notification);
        }
    }

    get notice(): Notification {
        return this.trigger.value;
    }

    get active(): boolean {
        return this.notice.status === 'activate' ? true : false;
    }

    get type(): string {
        return this.notice.type;
    }

    get duration(): number | null {
        return this.notice.timer.duration || null;
    }

    deactivate() {
        const notification = this.notice;
        notification.status = 'deactivate';
        this.trigger.next(notification);
    }

}
