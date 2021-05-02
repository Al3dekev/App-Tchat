import { TestBed } from '@angular/core/testing';

import { CheckIfOnlineGuard } from './check-if-online.guard';

describe('CheckIfOnlineGuard', () => {
  let guard: CheckIfOnlineGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckIfOnlineGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
