import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleableItemsComponent } from './recycleable-items.component';

describe('RecycleableItemsComponent', () => {
  let component: RecycleableItemsComponent;
  let fixture: ComponentFixture<RecycleableItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleableItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycleableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
