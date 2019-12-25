import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimListComponent } from './boletim-list.component';

describe('BoletimListComponent', () => {
  let component: BoletimListComponent;
  let fixture: ComponentFixture<BoletimListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletimListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
