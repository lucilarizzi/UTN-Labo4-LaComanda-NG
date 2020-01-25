import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMozoComponent } from './perfil-mozo.component';

describe('PerfilMozoComponent', () => {
  let component: PerfilMozoComponent;
  let fixture: ComponentFixture<PerfilMozoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMozoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
