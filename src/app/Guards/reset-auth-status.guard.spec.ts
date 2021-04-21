import { TestBed } from '@angular/core/testing';

import { ResetAuthStatusGuard } from './reset-auth-status.guard';

describe('ResetAuthStatusGuard', () => {
  let guard: ResetAuthStatusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResetAuthStatusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
