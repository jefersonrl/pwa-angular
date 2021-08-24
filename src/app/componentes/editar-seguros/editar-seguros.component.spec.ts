import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSegurosComponent } from './editar-seguros.component';

describe('EditarSegurosComponent', () => {
  let component: EditarSegurosComponent;
  let fixture: ComponentFixture<EditarSegurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSegurosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
