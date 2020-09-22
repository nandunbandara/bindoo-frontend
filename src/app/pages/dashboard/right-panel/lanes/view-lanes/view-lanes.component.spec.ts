import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLanesComponent } from './view-lanes.component';

describe('ViewLanesComponent', () => {
  let component: ViewLanesComponent;
  let fixture: ComponentFixture<ViewLanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
