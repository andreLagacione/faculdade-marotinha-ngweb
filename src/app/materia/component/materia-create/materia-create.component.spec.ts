import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaCreateComponent } from './materia-create.component';

describe('MateriaCreateComponent', () => {
  let component: MateriaCreateComponent;
  let fixture: ComponentFixture<MateriaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
