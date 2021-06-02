import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCepComponent } from './validate-cep.component';

describe('ValidateCepComponent', () => {
  let component: ValidateCepComponent;
  let fixture: ComponentFixture<ValidateCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
