import { TestBed } from '@angular/core/testing';

import { CallQniService } from './call-qni.service';

describe('CallQniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallQniService = TestBed.get(CallQniService);
    expect(service).toBeTruthy();
  });
});
