import { TestBed, inject } from '@angular/core/testing';

import { MessageToSendService } from './message-to-send.service';

describe('MessageToSendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageToSendService]
    });
  });

  it('should be created', inject([MessageToSendService], (service: MessageToSendService) => {
    expect(service).toBeTruthy();
  }));
});
