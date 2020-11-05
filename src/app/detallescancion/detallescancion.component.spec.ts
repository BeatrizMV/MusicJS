import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescancionComponent } from './detallescancion.component';

describe('DetallescancionComponent', () => {
  let component: DetallescancionComponent;
  let fixture: ComponentFixture<DetallescancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallescancionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallescancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
