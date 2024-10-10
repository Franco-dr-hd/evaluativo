import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborizadasComponent } from './saborizadas.component';

describe('SaborizadasComponent', () => {
  let component: SaborizadasComponent;
  let fixture: ComponentFixture<SaborizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborizadasComponent]
    });
    fixture = TestBed.createComponent(SaborizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
