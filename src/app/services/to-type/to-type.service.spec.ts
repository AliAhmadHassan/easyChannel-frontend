import { TestBed, inject } from '@angular/core/testing';

import { ToTypeService } from './to-type.service';

describe('ToTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToTypeService]
    });
  });

  it('should be created', inject([ToTypeService], (service: ToTypeService) => {
    expect(service).toBeTruthy();
  }));
});
