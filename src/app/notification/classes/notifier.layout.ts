import { Message } from './notifer.message';

interface Visibility {
    status: 'show' | 'hide';
}

export class NotifcationLayout {
    type: MultiLineNotifier | null;
    data: Message | Message[];
}

export class MultiLineNotifier {

    dismissButton: Visibility;
    closeButton: Visibility;
    title: Visibility;
    body: Visibility;

    constructor(dismissButton?: Visibility, closeButton?: Visibility, title?: Visibility, body?: Visibility) {
        this.dismissButton = dismissButton;
        this.closeButton = closeButton;
        this.title = title;
        this.body = body;
    }
}


