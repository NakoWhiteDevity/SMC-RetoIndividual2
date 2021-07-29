import { TestBed } from '@angular/core/testing';

import { RadarchartService } from './radarchart.service';

describe('RadarchartService', () => {
  let service: RadarchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadarchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
