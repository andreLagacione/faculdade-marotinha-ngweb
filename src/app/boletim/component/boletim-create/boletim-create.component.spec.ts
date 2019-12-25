import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimCreateComponent } from './boletim-create.component';

describe('BoletimCreateComponent', () => {
  let component: BoletimCreateComponent;
  let fixture: ComponentFixture<BoletimCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletimCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletimCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
