import { TestBed, inject } from '@angular/core/testing';

import { HeadingService } from './heading.service';

describe('HeadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadingService]
    });
  });

  it('should be created', inject([HeadingService], (service: HeadingService) => {
    expect(service).toBeTruthy();
  }));
});
