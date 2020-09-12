import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecycleableItemsComponent } from './create-recycleable-items.component';

describe('CreateRecycleableItemsComponent', () => {
  let component: CreateRecycleableItemsComponent;
  let fixture: ComponentFixture<CreateRecycleableItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecycleableItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecycleableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
