import { TestBed } from '@angular/core/testing';

import { AccessRoomGuard } from './access-room.guard';

describe('AccessRoomGuard', () => {
  let guard: AccessRoomGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessRoomGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
