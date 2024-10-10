import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespaladasComponent } from './despaladas.component';

describe('DespaladasComponent', () => {
  let component: DespaladasComponent;
  let fixture: ComponentFixture<DespaladasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespaladasComponent]
    });
    fixture = TestBed.createComponent(DespaladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
