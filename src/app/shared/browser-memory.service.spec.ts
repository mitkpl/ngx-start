import { TestBed, inject } from '@angular/core/testing';

import { BrowserMemoryService } from './browser-memory.service';

describe('BrowserMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserMemoryService]
    });
  });

  it('should be created', inject([BrowserMemoryService], (service: BrowserMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
