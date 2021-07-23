import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestobuscadoComponent } from './puestobuscado.component';

describe('PuestobuscadoComponent', () => {
  let component: PuestobuscadoComponent;
  let fixture: ComponentFixture<PuestobuscadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuestobuscadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestobuscadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
