import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacancionesComponent } from './listacanciones.component';

describe('ListacancionesComponent', () => {
  let component: ListacancionesComponent;
  let fixture: ComponentFixture<ListacancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacancionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
