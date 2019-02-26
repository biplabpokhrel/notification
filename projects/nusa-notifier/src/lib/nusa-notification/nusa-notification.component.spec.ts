import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NusaNotificationComponent } from './nusa-notification.component';

describe('NusaNotificationComponent', () => {
  let component: NusaNotificationComponent;
  let fixture: ComponentFixture<NusaNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NusaNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NusaNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
