import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NusaNotifierComponent } from './nusa-notifier.component';

describe('NusaNotifierComponent', () => {
  let component: NusaNotifierComponent;
  let fixture: ComponentFixture<NusaNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NusaNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NusaNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
