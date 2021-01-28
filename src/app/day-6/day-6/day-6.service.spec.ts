import { TestBed } from '@angular/core/testing';

import { Day6Service } from './day-6.service';

describe('Day6Service', () => {
  let service: Day6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Day6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
