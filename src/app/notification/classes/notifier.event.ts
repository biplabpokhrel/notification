import { BehaviorSubject, Observable } from 'rxjs';
import { NotifcationLayout, SingleNotifier, MultiNotifier } from './notifier.layout';
import { Message } from './notifer.message';
interface Timer {
    duration: number;
}

export class Notification extends NotifcationLayout  {
    private event =  new BehaviorSubject<boolean>(false);
    type: 'warn' | 'error' | 'note' | 'success' | 'help';
    timer?: Timer;
    status: 'activate' | 'deactivate';
    data: Message | Message[];
    private _layoutType = 'single';

    constructor() {
        super();
        this.status = 'deactivate';
    }

    set notice(msg: string) {
        this.data = new Message(msg);
    }

    set notices(msgs: string[]) {
        if ( this.layout instanceof  MultiNotifier) {
            this.data = msgs.map((msg: string) => new Message(msg));
        } else {
            console.error(`Please set layoutType = 'multi' before assigning messages`);
        }
    }

    set layoutType(type: 'single' | 'multi') {
        if ( type === 'multi' ) {
            this.layout = new MultiNotifier();
        } else {
            this.layout = new SingleNotifier();
        }
    }

    show = () => this.event.next(true);
    hide = () => this.event.next(false);

    get action(): Observable<boolean> { return this.event; }


}

export class Notifier {
    trigger = new BehaviorSubject<Notification>(new Notification());

    constructor(notification: Notification) {
        if (notification) {
            this.trigger.next(notification);
            this.notice.action.subscribe((toggle: boolean) => {
                if (toggle) {
                    this.activate();
                } else {
                    this.deactivate();
                }
            });
        }
    }

    get notice(): Notification {
        return this.trigger.value;
    }

    get isActive(): boolean {
        return this.notice.status === 'activate' ? true : false;
    }

    get type(): string {
        return this.notice.type;
    }

    get duration(): number | null {
        return this.notice.timer.duration || null;
    }

    activate() {
        const notification = this.notice;
        notification.status = 'activate';
        this.trigger.next(notification);
    }

    deactivate() {
        const notification = this.notice;
        notification.status = 'deactivate';
        this.trigger.next(notification);
    }

}
