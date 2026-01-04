import { TestBed, inject } from '@angular/core/testing';

import { RelUserIndiceService } from './rel-user-indice.service';

describe('RelUserIndiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelUserIndiceService]
    });
  });

  it('should be created', inject([RelUserIndiceService], (service: RelUserIndiceService) => {
    expect(service).toBeTruthy();
  }));
});
