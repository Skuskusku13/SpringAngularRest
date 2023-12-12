import { TestBed } from '@angular/core/testing';

import { VehiculesService } from './vehicules.service';

describe('VehiculeService', () => {
  let service: VehiculesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
