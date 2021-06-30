import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamoduloComponent } from './listamodulo.component';

describe('ListamoduloComponent', () => {
  let component: ListamoduloComponent;
  let fixture: ComponentFixture<ListamoduloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListamoduloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamoduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
