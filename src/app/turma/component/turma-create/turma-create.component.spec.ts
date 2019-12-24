import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaCreateComponent } from './turma-create.component';

describe('TurmaCreateComponent', () => {
  let component: TurmaCreateComponent;
  let fixture: ComponentFixture<TurmaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
