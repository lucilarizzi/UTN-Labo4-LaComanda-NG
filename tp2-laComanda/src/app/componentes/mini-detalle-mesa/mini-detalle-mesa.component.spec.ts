import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDetalleMesaComponent } from './mini-detalle-mesa.component';

describe('MiniDetalleMesaComponent', () => {
  let component: MiniDetalleMesaComponent;
  let fixture: ComponentFixture<MiniDetalleMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniDetalleMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniDetalleMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
