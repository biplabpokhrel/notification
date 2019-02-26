import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NusaNotificationsComponent } from './nusa-notifications.component';

describe('NusaNotificationsComponent', () => {
  let component: NusaNotificationsComponent;
  let fixture: ComponentFixture<NusaNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NusaNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NusaNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
