import { TestBed } from '@angular/core/testing';

import { CheckJWTInterceptor } from './check-jwt.interceptor';

describe('CheckJWTInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CheckJWTInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CheckJWTInterceptor = TestBed.inject(CheckJWTInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
