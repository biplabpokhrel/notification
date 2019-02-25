interface Visibility {
    status: 'show' | 'hide';
}

export class NotifcationLayout {
    layout: MultiNotifier | SingleNotifier;
    constructor(type?: MultiNotifier | SingleNotifier) {
        this.layout = type || new SingleNotifier();
    }
}

export class MultiNotifier {
    head?: string;
    dismissButton: Visibility;
    closeButton: Visibility;
    title: Visibility;
    body: Visibility;

    constructor(dismissButton?: Visibility, closeButton?: Visibility, title?: Visibility, body?: Visibility) {
        this.dismissButton = dismissButton || { status: 'show' };
        this.closeButton = closeButton || { status: 'show' };
        this.title = title || { status: 'show' };
        this.body = body || { status: 'show' };
        this.head = '';
    }
}

export class SingleNotifier {
    closeButton: Visibility;

    constructor(closeButton?: Visibility, icon?: Visibility) {
        this.closeButton = closeButton || { status: 'show' };
    }
}

