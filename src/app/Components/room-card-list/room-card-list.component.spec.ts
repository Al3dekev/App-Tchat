import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCardListComponent } from './room-card-list.component';

describe('RoomCardListComponent', () => {
  let component: RoomCardListComponent;
  let fixture: ComponentFixture<RoomCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
