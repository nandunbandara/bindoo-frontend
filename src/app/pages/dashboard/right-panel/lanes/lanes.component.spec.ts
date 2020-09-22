import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanesComponent } from './lanes.component';

describe('LanesComponent', () => {
  let component: LanesComponent;
  let fixture: ComponentFixture<LanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
