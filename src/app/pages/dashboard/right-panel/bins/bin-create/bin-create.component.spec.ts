import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinCreateComponent } from './bin-create.component';

describe('BinCreateComponent', () => {
  let component: BinCreateComponent;
  let fixture: ComponentFixture<BinCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
