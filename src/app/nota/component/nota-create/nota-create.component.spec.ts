import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaCreateComponent } from './nota-create.component';

describe('NotaCreateComponent', () => {
  let component: NotaCreateComponent;
  let fixture: ComponentFixture<NotaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
