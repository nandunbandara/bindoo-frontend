import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleableItemsViewComponent } from './recycleable-items-view.component';

describe('RecycleableItemsViewComponent', () => {
  let component: RecycleableItemsViewComponent;
  let fixture: ComponentFixture<RecycleableItemsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleableItemsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycleableItemsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
