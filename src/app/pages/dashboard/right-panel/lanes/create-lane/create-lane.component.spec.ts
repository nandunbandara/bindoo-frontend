import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLaneComponent } from './create-lane.component';

describe('CreateLaneComponent', () => {
  let component: CreateLaneComponent;
  let fixture: ComponentFixture<CreateLaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
