import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcepsComponent } from './searchceps.component';

describe('SearchcepsComponent', () => {
  let component: SearchcepsComponent;
  let fixture: ComponentFixture<SearchcepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
