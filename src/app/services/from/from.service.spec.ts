import { TestBed, inject } from '@angular/core/testing';

import { FromService } from './from.service';

describe('FromService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FromService]
    });
  });

  it('should be created', inject([FromService], (service: FromService) => {
    expect(service).toBeTruthy();
  }));
});
