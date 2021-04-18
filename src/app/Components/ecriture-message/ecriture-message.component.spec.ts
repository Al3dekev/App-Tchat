import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcritureMessageComponent } from './ecriture-message.component';

describe('EcritureMessageComponent', () => {
  let component: EcritureMessageComponent;
  let fixture: ComponentFixture<EcritureMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcritureMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcritureMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
