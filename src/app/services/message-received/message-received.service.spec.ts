import { TestBed, inject } from '@angular/core/testing';

import { MessageReceivedService } from './message-received.service';

describe('MessageReceivedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageReceivedService]
    });
  });

  it('should be created', inject([MessageReceivedService], (service: MessageReceivedService) => {
    expect(service).toBeTruthy();
  }));
});
