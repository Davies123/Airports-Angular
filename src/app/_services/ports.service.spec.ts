import { TestBed, inject } from '@angular/core/testing';

import { PortsService } from './ports.service';

describe('PortsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortsService]
    });
  });

  it('should be created', inject([PortsService], (service: PortsService) => {
    expect(service).toBeTruthy();
  }));
});
