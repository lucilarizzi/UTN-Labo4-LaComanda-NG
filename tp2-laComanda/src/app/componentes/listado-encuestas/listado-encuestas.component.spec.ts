import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEncuestasComponent } from './listado-encuestas.component';

describe('ListadoEncuestasComponent', () => {
  let component: ListadoEncuestasComponent;
  let fixture: ComponentFixture<ListadoEncuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEncuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
