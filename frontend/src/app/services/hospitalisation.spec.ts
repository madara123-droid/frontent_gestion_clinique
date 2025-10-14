import { TestBed } from '@angular/core/testing';

import { Hospitalisation } from './hospitalisation';

describe('Hospitalisation', () => {
  let service: Hospitalisation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hospitalisation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
