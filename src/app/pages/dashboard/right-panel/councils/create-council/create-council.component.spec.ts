import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCouncilComponent } from './create-council.component';

describe('CreateCouncilComponent', () => {
  let component: CreateCouncilComponent;
  let fixture: ComponentFixture<CreateCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
