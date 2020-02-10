import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSiteAdminComponent } from './on-site-admin.component';

describe('OnSiteAdminComponent', () => {
  let component: OnSiteAdminComponent;
  let fixture: ComponentFixture<OnSiteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnSiteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSiteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
