import { TestBed } from '@angular/core/testing';

import { LastnamesService } from './lastnames.service';

describe('LastnamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastnamesService = TestBed.get(LastnamesService);
    expect(service).toBeTruthy();
  });
});
