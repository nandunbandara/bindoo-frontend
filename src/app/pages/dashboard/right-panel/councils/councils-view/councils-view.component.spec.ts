import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilsViewComponent } from './councils-view.component';

describe('CouncilsViewComponent', () => {
  let component: CouncilsViewComponent;
  let fixture: ComponentFixture<CouncilsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
