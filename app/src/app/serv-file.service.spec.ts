import { TestBed } from '@angular/core/testing';

import { ServFileService } from './serv-file.service';

describe('ServFileService', () => {
  let service: ServFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
