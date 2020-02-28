import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinsTableComponent } from './bins-table.component';

describe('BinsTableComponent', () => {
  let component: BinsTableComponent;
  let fixture: ComponentFixture<BinsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
