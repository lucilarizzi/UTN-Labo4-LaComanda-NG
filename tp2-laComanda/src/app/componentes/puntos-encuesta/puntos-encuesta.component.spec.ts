import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosEncuestaComponent } from './puntos-encuesta.component';

describe('PuntosEncuestaComponent', () => {
  let component: PuntosEncuestaComponent;
  let fixture: ComponentFixture<PuntosEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
