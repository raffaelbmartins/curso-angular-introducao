import { TestBed } from '@angular/core/testing';

import { ProjetcsService } from './projetcs.service';

describe('ProjetcsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjetcsService = TestBed.get(ProjetcsService);
    expect(service).toBeTruthy();
  });
});
