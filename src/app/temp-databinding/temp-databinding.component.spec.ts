import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDatabindingComponent } from './temp-databinding.component';

describe('TempDatabindingComponent', () => {
  let component: TempDatabindingComponent;
  let fixture: ComponentFixture<TempDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
