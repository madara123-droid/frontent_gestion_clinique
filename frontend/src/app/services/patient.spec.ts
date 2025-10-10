import { TestBed } from '@angular/core/testing';
import { Patientservice } from './patient';

describe('Patient', () => {
  let service: Patientservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Patientservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
