import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPreciosComponent } from './listado-precios.component';

describe('ListadoPreciosComponent', () => {
  let component: ListadoPreciosComponent;
  let fixture: ComponentFixture<ListadoPreciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPreciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
