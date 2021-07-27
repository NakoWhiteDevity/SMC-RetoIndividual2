import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CromosComponent } from './cromos.component';

describe('CromosComponent', () => {
  let component: CromosComponent;
  let fixture: ComponentFixture<CromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
