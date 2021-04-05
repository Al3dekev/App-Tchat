import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDiscussComponent } from './no-discuss.component';

describe('NoDiscussComponent', () => {
  let component: NoDiscussComponent;
  let fixture: ComponentFixture<NoDiscussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDiscussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
