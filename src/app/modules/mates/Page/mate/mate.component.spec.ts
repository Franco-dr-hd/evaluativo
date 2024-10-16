import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateComponent } from './mate.component';

describe('MateComponent', () => {
  let component: MateComponent;
  let fixture: ComponentFixture<MateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateComponent]
    });
    fixture = TestBed.createComponent(MateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
