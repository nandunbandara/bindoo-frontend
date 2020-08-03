import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsViewComponent } from './organizations-view.component';

describe('OrganizationsViewComponent', () => {
  let component: OrganizationsViewComponent;
  let fixture: ComponentFixture<OrganizationsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
