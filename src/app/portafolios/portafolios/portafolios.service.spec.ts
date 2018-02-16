import { TestBed, inject } from '@angular/core/testing';

import { PortafoliosService } from './portafolios.service';

describe('PortafoliosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortafoliosService]
    });
  });

  it('should be created', inject([PortafoliosService], (service: PortafoliosService) => {
    expect(service).toBeTruthy();
  }));
});
