import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionDetallesComponent } from './cancion-detalles.component';

describe('CancionDetallesComponent', () => {
  let component: CancionDetallesComponent;
  let fixture: ComponentFixture<CancionDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
