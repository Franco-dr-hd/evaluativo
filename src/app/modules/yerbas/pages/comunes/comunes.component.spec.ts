import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunesComponent } from './comunes.component';

describe('ComunesComponent', () => {
  let component: ComunesComponent;
  let fixture: ComponentFixture<ComunesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComunesComponent]
    });
    fixture = TestBed.createComponent(ComunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
