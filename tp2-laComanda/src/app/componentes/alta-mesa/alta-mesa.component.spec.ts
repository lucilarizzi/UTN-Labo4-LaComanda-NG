import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMesaComponent } from './alta-mesa.component';

describe('AltaMesaComponent', () => {
  let component: AltaMesaComponent;
  let fixture: ComponentFixture<AltaMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
