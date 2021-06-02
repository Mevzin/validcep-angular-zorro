import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableValidComponent } from './table-valid.component';

describe('TableValidComponent', () => {
  let component: TableValidComponent;
  let fixture: ComponentFixture<TableValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
