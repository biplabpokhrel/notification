import { TestBed } from '@angular/core/testing';

import { NusaNotifierService } from './nusa-notifier.service';

describe('NusaNotifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NusaNotifierService = TestBed.get(NusaNotifierService);
    expect(service).toBeTruthy();
  });
});
