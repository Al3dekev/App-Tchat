import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperAppInfosComponent } from './upper-app-infos.component';

describe('UpperAppInfosComponent', () => {
  let component: UpperAppInfosComponent;
  let fixture: ComponentFixture<UpperAppInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperAppInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperAppInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
