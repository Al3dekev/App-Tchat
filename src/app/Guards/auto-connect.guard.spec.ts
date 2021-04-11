import { TestBed } from '@angular/core/testing';

import { AutoConnectGuard } from './auto-connect.guard';

describe('AutoConnectGuard', () => {
  let guard: AutoConnectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutoConnectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
