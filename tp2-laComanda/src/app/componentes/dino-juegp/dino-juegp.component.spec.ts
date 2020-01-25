import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoJuegpComponent } from './dino-juegp.component';

describe('DinoJuegpComponent', () => {
  let component: DinoJuegpComponent;
  let fixture: ComponentFixture<DinoJuegpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoJuegpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoJuegpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
