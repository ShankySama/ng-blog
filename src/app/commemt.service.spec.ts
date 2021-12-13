import { TestBed } from '@angular/core/testing';

import { CommemtService } from './commemt.service';

describe('CommemtService', () => {
  let service: CommemtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommemtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
