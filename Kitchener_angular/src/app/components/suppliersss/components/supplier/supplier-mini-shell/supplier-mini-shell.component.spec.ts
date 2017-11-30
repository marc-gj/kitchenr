import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMiniShellComponent } from './supplier-mini-shell.component';

describe('SupplierMiniShellComponent', () => {
  let component: SupplierMiniShellComponent;
  let fixture: ComponentFixture<SupplierMiniShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierMiniShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMiniShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
