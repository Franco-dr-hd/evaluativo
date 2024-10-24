import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YerbasComponent } from './yerbas.component';

describe('YerbasComponent', () => {
  let component: YerbasComponent;
  let fixture: ComponentFixture<YerbasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YerbasComponent]
    });
    fixture = TestBed.createComponent(YerbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
