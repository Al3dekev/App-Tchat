import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatSystemsComponent } from './tchat-systems.component';

describe('TchatSystemsComponent', () => {
  let component: TchatSystemsComponent;
  let fixture: ComponentFixture<TchatSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TchatSystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TchatSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
